import { Grid} from '@mui/material';
import Typography from '../core/Typography';
import React from 'react';
import Leavereport from '../section/Leavereport';

function Leavepage() {
  return (
    <>
    <Grid container paddingTop='20px'>
        <Grid item xs={12}>
            <Leavereport/>
        </Grid>
    </Grid>

    </>
  )
}

export default Leavepage