import { Add, CheckBox } from '@mui/icons-material';
import { Card, Checkbox, Drawer, Fab, Grid, IconButton, Stack, Switch, Tooltip, Typography as MuiTypography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../core/Typography';
import { deleteLeave, fetchUsersLeaves } from '../redux/action';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User_Leaveform from './user_leveform';
import { format, parseISO } from 'date-fns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '../core/Textfieldcore';
import dayjs, { Dayjs } from 'dayjs';

const listview = {
    // border: '1px solid #1976d2',
    margin: '0px 15px',
    boxShadow: '0px 1px 5px 1px #1976d2',
    backgroundColor: 'white',
    padding: '12px',
}

function User_LeaveReport() {
    const [openForm, setOpenForm] = useState(false);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const leaveformpage = () => {
        setOpenForm(prev => !prev);
    }

    const select = useSelector((state) => state.leave.user);
    console.log("leave select....", select);

    const data = select.map((x, ind) => {
        return { "id": ind + 1, ...x }
    })

    console.log("data....", data);
    useEffect(() => {
        dispatch(fetchUsersLeaves());
    }, []);

    const handleDeleteId = (id) => {
        console.log("id===", id);
        dispatch(deleteLeave(id));
    }

    const handleEvent = (id) => {
        setUser({ id });
        console.log("user====", user);
        leaveformpage();
    }

    return (
        <>

            <ToastContainer />
            <Stack sx={{ marginBottom: '50px' }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' marginX='20px'>
                    <Typography>
                        User Leave
                    </Typography>
                    <Fab style={{ position: "absulate", zIndex: 'auto' }} color='primary' aria-label='add' size='small' onClick={leaveformpage}>
                        <Add />
                    </Fab>
                </Stack>
                <Drawer anchor='right' open={openForm} onClose={leaveformpage} sx={{ position: "relative", zIndex: '9999', width: "100vw" }}>
                    <User_Leaveform user={user} />
                </Drawer>
            </Stack>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack spacing={3} direction='row' alignItems='center' justifyContent='space-between' sx={{
                        marginTop: '30px',
                        margin: '0px 20px'
                    }}>
                        <Stack >
                            <MuiTypography variant='h6'>StartDate</MuiTypography>
                        </Stack>
                        <Stack >
                            <MuiTypography variant='h6'>EndDate</MuiTypography>
                        </Stack>
                        <Stack >
                            <MuiTypography variant='h6'>Accepted</MuiTypography>
                        </Stack>
                        <Stack >
                            <MuiTypography variant='h6'>paid</MuiTypography>
                        </Stack>
                        <Stack >
                            <MuiTypography variant='h6'>Type of holiday</MuiTypography>
                        </Stack>
                        <Stack >
                            <MuiTypography variant='h6'>updated_at</MuiTypography>
                        </Stack>

                    </Stack>
                </Grid>
                {
                    data.map((x,key) => {
                        {
                            const sDate = x.start_date;
                            const eDate = x.end_date;
                            var start_date = format(
                                new Date(parseISO(sDate)),
                                'dd/MM/yyyy'
                            )

                            var end_date = format(
                                new Date(parseISO(eDate)),
                                'dd/MM/yyyy'
                            )

                         
                        }
                        return (
                            <Grid item xs={12} key={key}>
                                <Stack direction='row' alignItems='center' justifyContent='space-between' sx={listview}>
                                    <Stack >
                                        <MuiTypography variant='h12' >{start_date}</MuiTypography>
                                    </Stack>
                                    <Stack >
                                        <MuiTypography variant='h12' >{end_date}</MuiTypography>
                                    </Stack>

                                    <Stack >
                                        <Switch checked={x.approved} />
                                    </Stack>
                                    <Stack >
                                        <Checkbox checked={x.isPaid} />
                                    </Stack>
                                    <Stack >
                                        <MuiTypography variant='h12'>{x.type}</MuiTypography>
                                    </Stack>
                                    <Stack >
                                    <MuiTypography variant='h12'>{x.updated_at}</MuiTypography>
                                </Stack>

                                </Stack>
                            </Grid>
                        )
                    })
                }
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
    )
}

export default User_LeaveReport