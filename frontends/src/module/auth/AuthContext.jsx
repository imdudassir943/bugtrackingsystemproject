import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

// --- 1. AUTH CONTEXT ---
// Contains the logic for login, register, and token management.
const AuthContext = createContext(undefined);

// Using named exports internally so components can access AuthProvider and useAuth
export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem('accessToken')
    );
    const [refreshToken, setRefreshToken] = useState(
        localStorage.getItem('refreshToken')
    );
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    const isAuthenticated = !!accessToken;

    // Use effect to setup axios base URL and initial check
    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:8000/api-user/';
        setIsCheckingAuth(false);
    }, []);

    // Effect for setting Authorization header
    useEffect(() => {
        if (accessToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            localStorage.setItem('accessToken', accessToken);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('accessToken');
        }
    }, [accessToken]);

    // Effect for managing refresh token storage
    useEffect(() => {
        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
        } else {
            localStorage.removeItem('refreshToken');
        }
    }, [refreshToken]);

    // Axios Interceptor for Automatic Token Refresh
    useEffect(() => {
        const interceptorId = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                const status = error?.response?.status;
                // Identify auth-related URLs to prevent intercepting their own 401s
                const isAuthUrl = originalRequest?.url === 'token/' || originalRequest?.url === 'token/refresh/' || originalRequest?.url === 'register/';
                
                if (status === 401 && refreshToken && !isAuthUrl && !originalRequest?._retry) {
                    try {
                        originalRequest._retry = true;
                        
                        const { data } = await axios.post('token/refresh/', { refresh: refreshToken });
                        setAccessToken(data.access);
                        
                        originalRequest.headers = {
                            ...(originalRequest.headers || {}),
                            Authorization: `Bearer ${data.access}`,
                        };
                        
                        return axios.request(originalRequest);
                    } catch (refreshError) {
                        console.error("Token refresh failed. Logging out.", refreshError);
                        setAccessToken(null);
                        setRefreshToken(null);
                    }
                }
                
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.response.eject(interceptorId);
        };
    }, [refreshToken]);

    async function login(username, password) {
        const { data } = await axios.post('token/', { username, password });
        setAccessToken(data.access);
        setRefreshToken(data.refresh);
    }

    async function register({ username, email, password, password2, role }) {
        await axios.post('register/', { username, email, password, password2, role });
        
        // Log in the user immediately after successful registration
        await login(username, password);
    }

    function logout() {
        setAccessToken(null);
        setRefreshToken(null);
    }

    const value = useMemo(
        () => ({ isAuthenticated, accessToken, login, register, logout }),
        [isAuthenticated, accessToken]
    );

    if (isCheckingAuth) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}