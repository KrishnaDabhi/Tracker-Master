import { Card, Drawer, Fab, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteHoliday, fetchUsersHoliday } from '../redux/action';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Add } from '@mui/icons-material';
import Holidayform from './user/holidayform';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Holidayreport() {

  const columns = [
    {

      field: 'name',
      headerName: 'Holiday Name',
      width: 200,
      editable: false,
    },
    {

      field: 'start_date',
      headerName: 'Start  Date',
      width: 145,
      editable: false,
    },
    {

      field: 'end_date',
      headerName: 'End  Date',
      width: 145,
      editable: false,
    },
    {

      field: 'type',
      headerName: 'Type of Holiday',
      type: "string",
      sortable: false,
      width: 145,
      editable: false
    },
    {
      field: 'description',
      headerName: 'Description',
      sortable: false,
      width: 250,
      editable: false
    },
    {
      flex: 0.15,
      minWidth: 120,
      sortable: false,
      field: "actions",
      headerName: "Actions",
      renderCell: ({ row }) => (
        <>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEvent(row)} >
              <EditIcon fontSize="small" sx={{ mr: 0, color: 'blue' }} >
              </EditIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteId(row["_id"])}>
              <DeleteIcon fontSize="small" sx={{ mr: 0, color: 'red' }} />
            </IconButton>
          </Tooltip>
        </>
      ),
    }
  ];

  const [openForm, setOpenForm] = useState(false);
  const [user, setUser] = useState({});

  const leaveformpage = () => {
    setOpenForm(prev => !prev)

  }
  const dispatch = useDispatch();

  const select = useSelector((state) => state.holiday.holiday);
  console.log("select....", select);

  const data = select.map((x, ind) => {
    return { "id": ind + 1, ...x }
  })


  useEffect(() => {
    dispatch(fetchUsersHoliday());
  }, [dispatch]);

  const handleDeleteId = (id) => {
    console.log("id===", id);
    dispatch(deleteHoliday(id));
  }

  const handleEvent = (id) => {
    setUser({ id });
    console.log("user====", user);
    leaveformpage();
  }

  return (
    <>
      <ToastContainer />
      <Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' marginX='20px'>
          <Typography sx={{color:'gray',fontSize:'34px'}}>
            Holiday
          </Typography>
          <Fab style={{ position: "absulate", zIndex: 'auto' }} color='primary' aria-label='add' size='small' onClick={leaveformpage}>
            <Add />
          </Fab>
        </Stack>
        <Drawer anchor='right' open={openForm} onClose={leaveformpage} sx={{ position: "relative", zIndex: '9999', width: "100vw" }}>
          <Holidayform user={user} />
        </Drawer>
      </Stack>

      <Card style={{ height: 400, maxwidth: '100vw', margin: "20px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[25, 50, 75, 100]}
          pagination
          sx={{ fontSize: "16px", "& .MuiDataGrid-cell--textRight": { display: "flex", justifyContent: 'left' } }}
        />
      </Card>
    </>
  )
}

export default Holidayreport