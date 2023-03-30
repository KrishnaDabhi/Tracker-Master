
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import activitydata from '../Data/activitydata';

const style ={
   "& .MuiTimeline-root":{
    overflow:"hidden !important",
    overflowY:"scroll !important",
    height:"223px !important"
   }
}

function TotalActivity() {
    return (
        <>
                <Box>
                    <Typography variant='h6' sx={{fontWeight:600}}>
                        Today's Activity
                    </Typography>
                </Box>
            <Stack>
                <Timeline sx={style}>
                    {
                        activitydata.map((time,key)=>
                            <TimelineItem key={key}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography>
                                    {time.status}
                                </Typography>
                                <Typography>
                                    {time.time}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        )
                    }
                   
                </Timeline>
            </Stack>
        </>
    )
}

export default TotalActivity