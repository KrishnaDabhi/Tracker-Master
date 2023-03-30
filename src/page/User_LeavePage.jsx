import { Grid} from '@mui/material';
import React from 'react';
import User_LeaveReport from '../section/User_LeaveReport';

function User_Leavepage() {
  return (
    <>
    <Grid container paddingTop='20px'>
        <Grid item xs={12}>
            <User_LeaveReport/>
        </Grid>
    </Grid>

    </>
  )
}

export default User_Leavepage;