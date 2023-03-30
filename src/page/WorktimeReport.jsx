import { Card, Grid } from '@mui/material';
import Typography from '../core/Typography';
import React from 'react';
import Datepicker from '../section/Datepicker';
import WorktimeGrid from '../section/Worktime';

function WorktimeReport() {
    return (
        <>
            <Grid container paddingTop="20px">
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={6}>
                            <Typography sx={{marginX:'20px' }}>
                                Work Time Report
                            </Typography>
                        </Grid>
                        <Grid item md={6} display='flex' justifyContent='end'>
                            <Datepicker/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <WorktimeGrid/>
                </Grid>
            </Grid>

        </>
    )
}

export default WorktimeReport;