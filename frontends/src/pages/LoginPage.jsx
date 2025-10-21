import React, { useState } from 'react';
import { useFormik } from 'formik';

import { loginSchema } from '../schemas/Index'; 

import { useAuth } from '../module/auth/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const initialValues = {
  username: "",
  password: "",
};

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate(); 
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const initialValues = {
        username: "",
        password: "",
    };
    
    const handleLoginSubmit = async (values, actions) => {
        setError(null);
        setLoading(true);
        
        try {
            await login(values.username, values.password);
            navigate('/projects'); 
            
        } catch (err) {
            const errorMessage = err?.response?.data?.detail || 'Login failed. Please check your credentials.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: handleLoginSubmit,
    });
    
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = formik;

    return (
        <div className="p-4">
            <div className="max-w-md mx-auto">
                <h1 className="text-slate-900 text-3xl font-semibold mb-6 text-center">Sign in</h1>
                <p className="text-slate-600 text-[15px] mb-8 text-center">Sign in to your account and explore a world of possibilities.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}> 
                    
                    {error && (
                        <div className="text-red-600 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* Username Field */}
                    <div>
                        <label htmlFor="username" className="text-slate-900 text-sm font-medium mb-2 block">User name</label>
                        <div className="relative flex items-center">
                            <input 
                                name="username" 
                                id="username" 
                                value={values.username} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                type="text" 
                                className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600" 
                                placeholder="Enter user name" 
                            />
                        </div>
                        { errors.username && touched.username ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.username }</p>) : null}
                    </div>
                    
                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                        <div className="relative flex items-center">
                            <input 
                                name="password" 
                                id="password" 
                                value={values.password} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                type="password" 
                                className="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600" 
                                placeholder="Enter password" 
                            />
                        </div>
                        { errors.password && touched.password ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.password }</p>) : null}
                    </div>
                    
                    {/* Remember Me and Forgot Password (Placeholder) */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                            <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <Link to="/forgot-password" className="text-blue-600 hover:underline font-medium">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="!mt-8">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`w-full shadow-xl py-3 px-4 text-base font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-opacity ${loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                        <p className="text-sm !mt-6 text-center text-slate-600">
                            Don't have an account 
                            <Link to="/register" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;