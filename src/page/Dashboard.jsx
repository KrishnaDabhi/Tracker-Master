import { Grid } from '@mui/material'
import React from 'react'
import Tracktimesection from '../section/Tracktimesection'

function Dashboard() {
  return (
    <>
            <Grid container>
                <Grid item xs={12}>
            <Tracktimesection/>
                </Grid>
            </Grid>

    </>
  )
}

export default Dashboard;