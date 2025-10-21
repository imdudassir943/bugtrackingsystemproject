import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas/Index'


const initialValues = {
  fname: "",
  lname: "",
  username: "",
  email: "",
  password: "",
  cpassword: "",

}

const RegisterPage = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const initialValues = {
        username: "",
        email: "", 
        password: "",
        password2: "", 
        role: "developer", 
    };

    const handleRegisterSubmit = async (values, actions) => {
        setError(null);
        setLoading(true);

        try {
            await register(values); 
            navigate('/projects'); 
            
        } catch (err) {
            const errorData = err?.response?.data;
            let errorMessage = 'Registration failed. Please check the form.';
            
            if (errorData) {
                // Format DRF validation errors
                errorMessage = Object.keys(errorData)
                    .map(key => `${key}: ${Array.isArray(errorData[key]) ? errorData[key].join(', ') : errorData[key]}`)
                    .join(' | ');
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: handleRegisterSubmit
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = formik;

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h4 className="text-2xl font-semibold text-blue-600">Create a New Account</h4>
                </div>

                {error && (
                    <div className="text-red-600 p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-sm">
                        **Error:** {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                        
                        {/* Username */}
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Username</label>
                            <input name="username" id='username' value={values.username} onChange={handleChange} onBlur={handleBlur} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Username" />
                            { errors.username && touched.username ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.username }</p>) : null}
                        </div>

                        {/* Email Id */}
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
                            <input name="email" id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
                            { errors.email && touched.email ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.email }</p>) : null}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                            <input name="password" id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
                            { errors.password && touched.password ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.password }</p>) : null}
                        </div>

                        {/* Confirm Password (Named password2 for DRF mapping) */}
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                            <input name="password2" id='password2' value={values.password2} onChange={handleChange} onBlur={handleBlur} type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
                            { errors.password2 && touched.password2 ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.password2 }</p>) : null}
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Register the account as?</label>
                            <select 
                                name="role" 
                                id="role"
                                value={values.role}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            >
                                <option value="developer">Developer</option>
                                <option value="qa">QA</option>
                                <option value="manager">Manager</option>
                            </select>
                            { errors.role && touched.role ? (<p className='form-error text-red-500 text-xs mt-1'>{ errors.role }</p>) : null}
                        </div>
                    </div>
                    
                    <div className="mt-10 flex flex-col items-center">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`mx-auto block min-w-32 py-3 px-6 text-base font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-opacity ${loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {loading ? 'Registering...' : 'Sign Up'}
                        </button>
                        <p className="text-sm mt-4 text-center text-slate-600">
                            Already have an account?
                            <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">Sign in here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage