import * as yup from "yup";
export const userSchema = yup.object().shape({
    name:yup.string().min(3).max(15).required("Please enter your name"),
    lname:yup.string().min(3,"Last Name must be atleast 3 characters").max(15).required("Please enter your last name"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(4).max(10).required("Please enter your password"),
    confirm_password:yup.string().min(4).max(10).required().oneOf([yup.ref('password'),null],"Password must match")
})