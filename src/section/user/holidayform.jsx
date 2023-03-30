import { Box, Button, Card, Stack } from '@mui/material';
import { useState } from 'react';
import Typography from '../../core/Typography';
import { useDispatch } from 'react-redux';
import { addHoliday, addUser, updateHoliday, updateItem } from '../../redux/action';
import { useFormik, useFormikContext } from 'formik';
import TextField from '../../core/Textfieldcore';
import holidayformSchema from '../../validation/holidayform.validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

const Holidayform = ({ user, resetForm }) => {
    console.log('passs user....', user);
    const [rowdata, setRowData] = useState(user);
    const [endDate, setEndDate] = useState(new Date());

    console.log('rowdata,,,,', rowdata.id);

    const dispatch = useDispatch();
    const space = {
        marginY: '8px'
    }
   
    const { values, handleChange, errors, handleSubmit, touched, handleBlur, setFieldValue } = useFormik({
        initialValues: rowdata.id || {
          
            start_date: "",
            end_date: "",
            description: "",
            type: "",
        },
        validationSchema: holidayformSchema,

        onSubmit: async (value) => {
            console.log(value);

            if (rowdata.id) {
                dispatch(updateHoliday({ id: rowdata.id.id, ...value }));
            } else {
                dispatch(addHoliday({ payload: value }));
            }

        }
    })

    return (
        <>
            <ToastContainer />
            <Stack spacing={0} sx={{ width: "40vw" }}>
                <Card sx={{ maxWidth: '100vw', padding: "10px" }}>

                    <form noValidate onSubmit={handleSubmit} resetForm={resetForm}>
                        <Stack marginX={5} marginY={2} >
                            <Typography textAlign='center'>
                                Holiday
                            </Typography>
                            <Box sx={space}>
                                <TextField fullWidth size='small' label='Holiday Name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                {touched.name && Boolean(errors.name) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.name}</Typography>}
                            </Box>
                            <Box sx={space}>

                                {/*  <DatePicker
                            name="start_date"
                            value={values.start_date}
                            selected={values.start_date}
                            onChange={(date) => setFieldValue("start_date", date)}
                            dateFormat="yyyy-MM-dd"
                          />*/}

                                <TextField fullWidth size='small' label='Start_Date' name='start_date' value={values.start_date} onChange={handleChange} onBlur={handleBlur} />
                                {touched.start_date && Boolean(errors.start_date) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.start_date}</Typography>}
                            </Box>
                            <Box sx={space}>
                                <TextField fullWidth size='small' label='End_Date' variant='outlined' name='end_date' value={values.end_date} onChange={handleChange} onBlur={handleBlur} />
                                {touched.end_date && Boolean(errors.end_date) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.end_date}</Typography>}
                            </Box>
                            <Box sx={space}>
                                <TextField fullWidth size='small' label='Description' variant='outlined' name='description' value={values.description} onChange={handleChange} onBlur={handleBlur} />
                                {touched.description && Boolean(errors.description) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.description}</Typography>}
                            </Box>

                            <Box sx={space}>
                                <TextField fullWidth size='small' label='Type' variant='outlined' name='type' value={values.type} onChange={handleChange} onBlur={handleBlur} />
                                {touched.type && Boolean(errors.type) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.type}</Typography>}
                            </Box>

                            <Box display='flex' justifyContent='center'>
                                <Button type='submit' variant='outlined' sx={{ width: "250px", marginTop: '50px' }} >
                                    {rowdata.id ? 'Update' : 'Create'}
                                </Button>
                            </Box>

                        </Stack>
                    </form>
                </Card>
            </Stack>
        </>
    )
}

export default Holidayform;
