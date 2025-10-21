import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../module/auth/AuthContext'

export default function AuthLayout() {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) return <Navigate to="/projects" />; 
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 sm:p-8 border border-indigo-100">
                <Outlet />
            </div>
        </div>
    );
}
