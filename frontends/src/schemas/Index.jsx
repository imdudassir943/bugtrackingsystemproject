import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    fname: Yup.string().min(3).max(25).required("first name field is required"),
    lname: Yup.string().min(3).max(25),
    username: Yup.string().min(3).max(25).required("username field is required"),
    email: Yup.string().email().required("email field is required"),
    password: Yup.string().required("password field is required"),
    cpassword: Yup.string().min(6).required("confirm password field is required").oneOf([Yup.ref('password'), null], "password and confirm password must match each other."),
});



export const loginSchema = Yup.object({
    username: Yup.string().required("username is required for login account."),
    password: Yup.string().required("password field is required for login account."),
})
