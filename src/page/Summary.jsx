
import { Grid } from '@mui/material'
import React from 'react'
import Typography from '../core/Typography'
import Summarysection from '../section/Summarysection'

function Summary() {
  return (
    <>
    <Grid container paddingTop="20px">
                <Grid item xs={12}>
                    <Typography sx={{ marginX: "20px"}}>
                        Summary
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Summarysection/>
                </Grid>
               
            </Grid>
    </>
  )
}

export default Summary