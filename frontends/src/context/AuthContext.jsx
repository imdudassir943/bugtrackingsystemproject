import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access');

    async function fetchMe() {
      try {
        if (token) {
          const { data } = await api.get('/auth/me/');
          setUser(data);
        }
      } catch (e) {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
      } finally {
        setLoading(false);
      }
    }

    fetchMe();
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login/', { username: email, password });
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    const me = await api.get('/auth/me/');
    setUser(me.data);
  };

  const register = async (payload) => {
    await api.post('/auth/register/', { ...payload, username: payload.email });
    await login(payload.email, payload.password);
  };

  const logout = async () => {
    const refresh = localStorage.getItem('refresh');
    try {
      if (refresh) {
        await api.post('/auth/logout/', { refresh });
      }
    } finally {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      setUser(null);
    }
  };

  const value = useMemo(() => ({ user, loading, login, register, logout }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
