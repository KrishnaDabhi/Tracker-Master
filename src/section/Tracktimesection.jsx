import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../core/Button";
import UserContext from "../hooks/UserContext";
import { WorkInUser } from "../redux/action";
import TotalActivity from "./TotalActivity";

const style = {
  border: "1px solid lightgray",
  borderRadius: "5px",
  marginTop: "7px",
};
const circlestyle = {
  border: "4px solid lightgray",
  borderRadius: "67px",
  width: "130px",
  height: "130px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Boxstyle = styled(Box)(({ theme }) => ({
  border: "1px solid lightgray",
  padding: "10px",
  width: "254px",
  textAlign: "center",
}));

function Tracktimesection() {
  const timer = useSelector((status) => status.workIn.user);
  console.log("timer.......", timer);
  const dispatch = useDispatch();

//   const data = timer.map((x, ind) => {
//     return { id: ind + 1, ...x };
//   });
//   console.log("data...", data.login_time);

  const handleWorkInEvent = () => {
    console.log("work in ....");
    const id = JSON.parse(localStorage.getItem("login_id"));
    console.log("id...",id);

    // const btn_workIn = "WORK_OUT"
    
    dispatch(WorkInUser({user:id,status:"WORK_IN"}));
  };

  return (
    <>
      <Grid container spacing={4} padding={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Timesheet :</Typography>
              <Box sx={style} padding={1}>
                <Typography variant="body1">Working in at</Typography>
                <Typography variant="body1">
                  Wed, 11th March 2019 10.00 AM
                </Typography>
              </Box>
              <Stack alignItems="center" paddingY={4}>
                <Box sx={circlestyle}>
                  <Typography sx={{ fontWeight: 600 }}>3.45 hrs</Typography>
                </Box>
                <Button onClick={handleWorkInEvent}>Work In</Button>
                <Stack
                  direction="row"
                  sx={{
                    width: "400px",
                    justifyContent: "space-around",
                    display: "none",
                  }}
                >
                  <Button>Break In</Button>
                  <Button>Work Out</Button>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="center" spacing={1}>
                <Boxstyle>
                  <Typography>
                    Break <br />
                    1.21 hrs
                  </Typography>
                </Boxstyle>
                <Boxstyle>
                  <Typography>
                    Work Time
                    <br />
                    3:50 hrs
                  </Typography>
                </Boxstyle>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={6} md={12}>
              <Card>
                <CardContent>
                  <Typography variant="body1">Total time tracked</Typography>
                  <Typography variant="h6" fontWeight={600}>
                    2:50/8:30
                  </Typography>
                  <Stack>
                    <Typography variant="p">This week : 9h 34m</Typography>
                    <Typography variant="p">This month : 130h 2m</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={12}>
              <Card sx={{ height: "295px" }}>
                <CardContent>
                  <TotalActivity />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Tracktimesection;
