import { Grid, Stack } from '@mui/material'
import React from 'react'
import Typography from '../core/Typography'
import Holidayreport from '../section/Holidayreport'

function Holidays() {
    return (
        <>
            <Grid container paddingTop='20px'>
                <Grid item xs={12}>
                    <Holidayreport/>
                </Grid>
            </Grid>

        </>
    )
}

export default Holidays