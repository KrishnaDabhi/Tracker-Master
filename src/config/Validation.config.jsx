const ERROR ={
EMAIL:{
    required:'Email is required',
    invalid:"Email is invalid",
},
PASSWORD:{
    required:"Password is required",
    invalid:"Password must include uppercase,lowercase,number and special symbol",
    min:"min 8 characters required",
    min_chars:8,
    regex:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
    not_matched:"Passwords does not match",
},
CONFIRMPASSWORD:{
    require:"Confirm Password is required",
    invalid:"Both password must be same",
},
COMPANY_NAME:{
    required:"Company Name is required",
},
ADDRESS:{
    require:'Address is required',
},
STATE:{
    require:"State is required",
},
CITY:{
    require:"City is required",
},
COUNTRY:{
    require:"Country is required",
},
POSTAL_CODE:{
    require:"Postal code is required"
},
NAME:{
    require:"Name is required",
    min:"Min 3 characters is required",
    min_chars:3
},
DISPLAY_NAME:{
    require:"Display name is required",
    min_chars:5,
    min:"Min 5 characters is required",
},
FIRST_NAME:{
    require:"First name is rquired",
    min_chars:3,
    min:"min 3 characters id required",
},
LAST_NAME:{
    require:"Last name is required",
    min_chars:3,
    min:"min 3 is required",
    regex:/^[a-zA-Z ]+$/,
},
PHONENUMBER:{
    require:"Phone number is required",
    regex: /^[+]?[0-9]{10,12}$/,
    invalid:"Allowed only numbers",
},
};
export default ERROR;
