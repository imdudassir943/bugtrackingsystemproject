import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <div class="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
      <div class="text-center mb-12 sm:mb-16">
        <a href="javascript:void(0)">
          <p className='text-4xl text-blue-300 font-semibold'>BUG TRACKING</p>
        </a>
        <h4 class="text-slate-600 text-base mt-6">Sign up into your account</h4>
      </div>

      <form>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">First Name</label>
            <input name="name" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Last Name</label>
            <input name="lname" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
            <input name="email" type="text" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Mobile No.</label>
            <input name="number" type="number" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <input name="password" type="password" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
          </div>
        </div>

        <div class="mt-12">
          <button type="button" class="mx-auto block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
            Sign up
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage