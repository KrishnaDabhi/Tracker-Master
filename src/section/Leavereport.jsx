import {
  Card,
  Checkbox,
  Drawer,
  Fab,
  Grid,
  IconButton,
  Stack,
  Switch,
  Tooltip,
  Typography as MuiTypography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "../core/Typography";
import { deleteLeave, fetchUsersLeaves, updateLeave } from "../redux/action";
import Leaveform from "./leaveform";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format, parseISO } from "date-fns";

const listview = {
  // border: '1px solid #1976d2',
  margin: "0px 15px",
  // boxShadow: '5px 1px 5px #1976d2',
  backgroundColor: "white",
  padding: "12px",
  boxShadow: "0px 1px 5px 1px #1976d2",
};
const colorAll = {
  color: "grey",
};

function Leavereport() {
  const [openForm, setOpenForm] = useState(false);
  const [user, setUser] = useState({});
  const [check, setChecked] = useState(false);
  const [switched, setSwitched] = useState(false);
  const dispatch = useDispatch();

  const leaveformpage = () => {
    setOpenForm((prev) => !prev);
  };

  const select = useSelector((state) => state.leave.user);
  console.log("leave select....", select);

  const data = select.map((x, ind) => {
    return { id: ind + 1, ...x };
  });

  console.log("data....", data);
  useEffect(() => {
    dispatch(fetchUsersLeaves());
  }, []);

  const handleDeleteId = (id) => {

    console.log("id===", id);
    dispatch(deleteLeave(id));
  };

  const handleEvent = (id) => {
    console.log("checkedddd");
    setUser({ id });
    console.log("user====", user);
    leaveformpage();
  };

  // const handleEventPaid = (id) => {
  //   console.log("checkedddd", id);
  //   dispatch(updateLeave(id));
  // };

  const handleEventChange = (e, x) => {
    e.preventDefault();
    // console.log("eeeee",e);
    // console.log("xxxx",x);

    // setChecked(e.target.checked);
    // console.log("check....",check,x);
    // dispatch(updateLeave(x))

    const updatedLeave = { ...x, isPaid: e.target.checked };
    console.log("updatedLeave...", updatedLeave);
    setChecked(e.target.checked);
    // console.log("check....",check);
    dispatch(updateLeave(updatedLeave));
  };

  const handleEventChangeSwitch = (e, x) => {
    e.preventDefault();
    const updatedSwitchLeave = { ...x, approved: e.target.checked };
    console.log("updatedSwitchLeave...", updatedSwitchLeave);
    setChecked(e.target.checked);
    // console.log("check....",check);
    dispatch(updateLeave(updatedSwitchLeave));
  };

  return (
    <>
      <ToastContainer />
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginX="20px"
        >
          <Typography sx={{ marginBottom: "30px" }}>Admin Leave</Typography>
          {/* <Fab style={{ position: "absulate", zIndex: 'auto' }} color='primary' aria-label='add' size='small' onClick={leaveformpage}>
            <Add />
  </Fab>*/}
        </Stack>
        <Drawer
          anchor="right"
          open={openForm}
          onClose={leaveformpage}
          sx={{ position: "relative", zIndex: "9999", width: "100vw" }}
        >
          <Leaveform user={user} />
        </Drawer>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            spacing={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              marginTop: "30px",
              margin: "0px 20px",
            }}
          >
            <Stack className="colorAll">
              <MuiTypography variant="h6">StartDate</MuiTypography>
            </Stack>
            <Stack>
              <MuiTypography variant="h6">EndDate</MuiTypography>
            </Stack>
            <Stack>
              <MuiTypography variant="h6">Accepted</MuiTypography>
            </Stack>
            <Stack>
              <MuiTypography variant="h6">Paid</MuiTypography>
            </Stack>
            <Stack>
              <MuiTypography variant="h6">Type of holiday</MuiTypography>
            </Stack>
            <Stack>
              <MuiTypography variant="h6">Action</MuiTypography>
            </Stack>
          </Stack>
        </Grid>
        {data.map((x, ind) => {
          {
            const sDate = x.start_date;
            const eDate = x.end_date;
            var start_date = format(new Date(parseISO(sDate)), "dd/MM/yyyy");

            var end_date = format(new Date(parseISO(eDate)), "dd/MM/yyyy");
          }
          return (
            <Grid item xs={12} key={ind}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={listview}
              >
                <Stack>
                  <MuiTypography variant="h12">{start_date}</MuiTypography>
                </Stack>
                <Stack>
                  <MuiTypography variant="h12">{end_date}</MuiTypography>
                </Stack>

                <Stack>
                  <Switch
                    id="switched"
                    name="switched"
                    checked={x.approved}
                    // checked={switched[x.approved]}
                    onChange={(e) => handleEventChangeSwitch(e, x)}
                  />
                </Stack>
                <Stack>
                  <Checkbox
                    id="check"
                    name="check"
                    checked={x.isPaid}
                    // checked={check[x.isPaid]}
                    onChange={(e) => handleEventChange(e, x)}
                  />
                </Stack>
                <Stack>
                  <MuiTypography variant="h12">{x.type}</MuiTypography>
                </Stack>
                <Stack>
                  <MuiTypography variant="h12">
                    {" "}
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEvent(x)}>
                        <EditIcon
                          fontSize="small"
                          sx={{ mr: 0, color: "blue" }}
                        ></EditIcon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDeleteId(x._id)}>
                        <DeleteIcon
                          fontSize="small"
                          sx={{ mr: 0, color: "red" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </MuiTypography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>

      {/* <Card style={{ height: 400, maxwidth: '100vw', margin: "20px" }}>
       <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5, 10, 20, 25, 100]}
          pagination
          sx={{ fontSize: "16px", "& .MuiDataGrid-cell--textRight": { display: "flex", justifyContent: 'left' } }}

      </Card>/>*/}
    </>
  );
}

export default Leavereport;
