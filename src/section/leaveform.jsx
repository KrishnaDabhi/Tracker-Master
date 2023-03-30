import { Box, Button, Card, Stack, Checkbox, Typography as MuiTypography, Switch } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, useFormikContext } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import leaveformSchema from '../validation/leaveform.validation';
import { updateLeave } from '../redux/action';
import Typography from '../core/Typography';
import TextField from '../core/Textfieldcore';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Leaveform = ({ user }) => {
    console.log('passs user....', user);
    const [rowdata, setRowData] = useState(user);

    console.log('rowdata,,,,', rowdata.id);

    const dispatch = useDispatch();
    const space = {
        marginY: '8px'
    }

    const { values, handleChange, errors, handleSubmit, touched, handleBlur, setFieldValue } = useFormik({
        initialValues: rowdata.id || {
            name: "",
            start_date: new Date(),
            end_date: new Date(),
            description: "",
            type: "",
            isPaid: "",
            updated_by: "",
            user: "",
            approved: ""
        },
        validationSchema: leaveformSchema,

        onSubmit: async (value) => {
            console.log("update value...........", value);

            // if (rowdata.id) {
            dispatch(updateLeave({ id: rowdata.id.id, ...value }));
            // } else {
            // dispatch(addHoliday({ payload: value }));
            // }

        }
    })

    return (
        <>
            <ToastContainer />
            <Stack spacing={0} sx={{ width: "40vw", position: "relative" }} >
                <Card sx={{ maxWidth: '100vw', padding: "10px" }}>

                    <form noValidate onSubmit={handleSubmit} >
                        <Stack marginX={5} marginY={2} >
                            <Typography textAlign='center'>
                                User Leave Form
                            </Typography>

                            <Box sx={space}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        name="start_date"
                                        label="Start_Date"
                                        value={values.start_date}
                                        onChange={(date) => setFieldValue('start_date', date)}
                                        // onChange={(newValue) => {
                                        //     setValue(newValue);
                                        // }}

                                        dateFormat="dd-mm-yyyy"
                                        renderInput={(params) => <TextField {...params} />}
                                        disabled
                                    />
                                </LocalizationProvider>
                                {touched.start_date && errors.start_date ? (
                                    <div>{errors.start_date}</div>
                                ) : null}

                                {/*  <TextField fullWidth size='small' label='Start_Date' name='start_date' value={values.start_date} onChange={handleChange} onBlur={handleBlur} />
    {touched.start_date && Boolean(errors.start_date) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.start_date}</Typography>}*/}
                            </Box>
                            <Box sx={space}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <DatePicker
                                        name="end_date"
                                        label="End_Date"
                                        value={values.end_date}
                                        onChange={(date) => setFieldValue('end_date', date)}
                                        // onChange={(newValue) => {
                                        //     setValue(newValue);
                                        // }}

                                        dateFormat="dd-mm-yyyy"
                                        renderInput={(params) => <TextField {...params} />}
                                        disabled
                                    />


                                    {/*   <DatePicker
                                        clearable
                                        open={isOpen}
                                        onClose={() => setIsOpen(false)}
                                        label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        PopperProps={{
                                            placement: "bottom-end",
                                            anchorEl: anchorEl,
                                            zIndex: 999999 // <-- update the zIndex value here
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                              {...params}
                                              onClick={() => setIsOpen(isOpen => !isOpen)}
                                            />
                                            // <Button variant="contained" onClick={handleClick}>
                                            //     test
                                            // </Button>
                                        )}
                                        />*/}
                                </LocalizationProvider>
                                {touched.end_date && errors.end_date ? (
                                    <div>{errors.end_date}</div>
                                ) : null}
                                {/* <TextField fullWidth size='small' label='End_Date' variant='outlined' name='end_date' value={values.end_date} onChange={handleChange} onBlur={handleBlur} />
                                {touched.end_date && Boolean(errors.end_date) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.end_date}</Typography>}*/}
                            </Box>
                            <Box sx={space}>
                                <TextField fullWidth size='small' label='Description' variant='outlined' name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}  disabled/>
                                {touched.description && Boolean(errors.description) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.description}</Typography>}
                            </Box>

                            <Box sx={space}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="type"
                                        value={values.type}
                                        label="Type"
                                        onChange={handleChange}
                                        disabled
                                    >
                                        <MenuItem value='FULL' disableSelected>FULL</MenuItem>
                                        <MenuItem value='HALF' disableSelected>HALF</MenuItem>
                                    </Select>
                                </FormControl>


                                {/*  <TextField fullWidth size='small' label='Type' variant='outlined' name='type' value={values.type} onChange={handleChange} onBlur={handleBlur} />*/}
                                {touched.type && Boolean(errors.type) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.type}</Typography>}
                            </Box>

                            <Box sx={space}>
                                <Stack >
                                    <InputLabel id="demo-simple-select-label">isPaid</InputLabel>
                                    <Checkbox checked={values.isPaid} name='isPaid' onChange={handleChange} />
                                </Stack>
                                {/* <TextField fullWidth size='small' label='isPaid' variant='outlined' name='isPaid' value={values.isPaid} onChange={handleChange} onBlur={handleBlur} />*/}

                            </Box>
                            <Box sx={space}>
                                <Stack >
                                    <InputLabel id="demo-simple-select-label">Accepted</InputLabel>
                                    <Switch checked={values.approved} name='approved' onChange={handleChange} />
                                </Stack>
                            </Box>

                          {/*  <Box sx={space}>
                                <TextField fullWidth size='small' label='updated_by' variant='outlined' name='updated_by' value={values.updated_by} onChange={handleChange} onBlur={handleBlur} />
                                {touched.updated_by && Boolean(errors.updated_by) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.updated_by}</Typography>}
                            </Box>

                            <Box sx={space}>
                                <TextField fullWidth size='small' label='user' variant='outlined' name='user' value={values.user} onChange={handleChange} onBlur={handleBlur} />
                                {touched.user && Boolean(errors.user) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.user}</Typography>}
                            </Box>*/}

                            <Box display='flex' justifyContent='center'>
                                <Button type='submit' variant='outlined' sx={{ width: "250px", marginTop: '50px' }} >
                                    Update
                                </Button>
                            </Box>

                        </Stack>
                    </form>
                </Card>
            </Stack>
        </>
    )
}

export default Leaveform;
