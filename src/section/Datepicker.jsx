import { Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'

function Datepicker() {
    const [date , setDate] = React.useState(null);
  return (
    <>
    <Stack marginRight='20px'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        value={date}
        onChange={(newdate)=>{setDate(newdate);}}
        renderInput={(prams)=><TextField {...prams}/>}
         >
        </DatePicker>
    </LocalizationProvider>
    </Stack>
    </>
  )
}

export default Datepicker;