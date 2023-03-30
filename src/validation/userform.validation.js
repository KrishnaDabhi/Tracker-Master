import * as yup from 'yup';

const userformSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required('Password is required'),
    mobile_no:yup.number().required('Mobile No is required'),
    address:yup.string().required('Address is required'),
    role:yup.string().uppercase().required('role is required'),
})

export default userformSchema;