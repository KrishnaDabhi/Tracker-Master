import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Textfield from '../../core/Textfieldcore'
import { useAuth } from '../../hooks/useAuth'
import loginSchema from '../../validation/login.validation'

const Middleui = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: "5px",
    padding: "20px"

}))
const Loginpart = styled(Box)(({ theme }) => ({
    //  backgroundColor:theme.palette.secondary.main,
    backgroundColor: "#2667FF",

}))

const style = {
    fontWeight: 600,
    color: '#555555',
    paddingY: '8px'
}

export default function Loginform(props) {
    const { login } = useAuth();
    

    const nav = useNavigate();
    useEffect(() => {
        if ((!!localStorage.getItem('token'))) {
            nav('/dashboard', { replace: true });
        } else {
            nav('/', { replace: true });
        }
    }, [])
    const { values, handleChange, errors, handleSubmit, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async (value) => {
           
            try {
               
                console.log("value====", value);
                let data = await login(value);

                if ((!!localStorage.getItem('token'))) {
                    nav('/dashboard', { replace: true });
                } else {
                    nav('/', { replace: true });
                }
            } catch (error) {

                console.error('error', error);
            }
        }
    })
    
    return (
        <form noValidate onSubmit={handleSubmit}>
            <Loginpart >
                <Stack paddingX={5} paddingY={4}>
                    <Typography variant='h4' color='white'>
                        Account Login
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: 15, paddingY: 2 }}>
                        Welcome back! Log In with your Email
                    </Typography>
                    <Middleui>
                        <Typography sx={style} >
                            Email address
                        </Typography>
                        <Textfield size='small' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {touched.email && Boolean(errors.email) && <Typography color='error' sx={{color:'red',fontSize:'12px'}}>{errors.email}</Typography>}
                        <Typography sx={style}>
                            Password
                        </Typography>
                        <Textfield size='small' variant='outlined' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {touched.password && Boolean(errors.password) && <Typography color='error' sx={{color:'red',fontSize:'12px'}}>{errors.password}</Typography>}
                        <Box sx={{ marginY: "20px" }}>
                            <Button type='submit' variant='contained' sx={{ width: '350px', backgroundColor: '#2667FF', "&:hover": { backgroundColor: "#2667FF" } }}>LOG IN</Button>
                        </Box>
                    </Middleui>
                </Stack>
            </Loginpart>
        </form>
    )
}
