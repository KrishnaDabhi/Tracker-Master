import { Grid, Typography } from '@mui/material'
import React from 'react'
import User_report from '../section/User_report'

const User = () => {
  return (
    <>
    <Grid container paddingTop='20px'>
        <Grid item xs={12}>
            <User_report/>
        </Grid>
    </Grid>

</>
  )
}

export default User
