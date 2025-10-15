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

  const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(" ~ file: Registration.jsx ~ line 20 ~ Registration ~ Values", values)
      action.resetForm();
    }
  })

    
  return (
    <div>
      <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
      <div className="text-center mb-12 sm:mb-16">
        <h4 className="text-2xl font-semibold text-blue-400 mt-6">Sign up into your account</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">First Name</label>
            <input name="fname" id='fname' value={values.fname} onChange={handleChange} onBlur={handleBlur} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
            { errors.fname && touched.fname ? (<p className='form-error'>{ errors.fname }</p>) : null}
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Last Name</label>
            <input name="lname" id='lname' value={values.lname} onChange={handleChange} onBlur={handleBlur} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
            { errors.lname && touched.lname ? (<p className='form-error'>{ errors.lname }</p>) : null}
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Username</label>
            <input name="username" id='username' value={values.username} onChange={handleChange} onBlur={handleBlur} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Username" />
            { errors.username && touched.username ? (<p className='form-error'>{ errors.username }</p>) : null}
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
            <input name="email" id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="text" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
            { errors.email && touched.email ? (<p className='form-error'>{ errors.email }</p>) : null}
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <input name="password" id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
            { errors.password && touched.password ? (<p className='form-error'>{ errors.password }</p>) : null}
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
            <input name="cpassword" id='cpassword' value={values.cpassword} onChange={handleChange} onBlur={handleBlur} type="password" className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
            { errors.cpassword && touched.cpassword ? (<p className='form-error'>{ errors.cpassword }</p>) : null}
          </div>
          <div>
  <label className="text-slate-900 text-sm font-medium mb-2 block">
    Register the account as?
  </label>
  <select 
    name="user_role" 
    className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md 
            focus:bg-transparent outline-blue-500 transition-all"
  >
    <option value="">Select role</option>
    <option value="qa">QA</option>
    <option value="developer">Developer</option>
    <option value="manager">Manager</option>
  </select>
</div>

        </div>
        <div className="mt-12">
          <button type="button" className="mx-auto block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
            Sign up
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage