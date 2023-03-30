import { Card, Drawer, Fab, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { deleteUser, fetchUsers } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Add } from '@mui/icons-material';
import Userform from './user/userform';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function User_report() {

  const columns = [

    {

      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {

      field: 'email',
      headerName: 'Email',
      width: 145,
      editable: false,
    },
    {

      field: 'mobile_no',
      headerName: 'Mobile No',
      width: 145,
      editable: false,
    },
    {

      field: 'date_of_birth',
      headerName: 'Date_of_Birth',
      type: "string",
      sortable: false,
      width: 145,
      editable: false
    },
    {

      field: 'gender',
      headerName: 'Gender',
      sortable: false,
      width: 145,
      editable: false
    },
    {

      field: 'address',
      headerName: 'Address',
      sortable: false,
      width: 140,
      editable: false
    },
    {

      field: 'role',
      headerName: 'Role',
      sortable: false,
      width: 140,
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
  const [roleData, setRole] = useState();

  const leaveformpage = () => {
    setOpenForm(prev => !prev)

  }

  const dispatch = useDispatch();

  const select = useSelector((state) => state.user.user);
  console.log("user select....", select);

  const data = select.map((g, index) => {
    return { "id": index + 1, ...g }
  })
  console.log('ddddddddddd', data);

  const role = data.map((x,ind)=>{
    return x.role;
  })
console.log("role...",role);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDeleteId = (id) => {

    console.log("id===", id);
    dispatch(deleteUser(id));
  }

  const handleEvent = (id) => {
    console.log("row====", id);
    setUser({ id });
    console.log("user====", user);
    leaveformpage();
  }
  return (
    <>
      <ToastContainer />
      <Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' marginX='20px'>
          <Typography>
            User
          </Typography>
          <Fab style={{ position: "absulate", zIndex: 'auto' }} color='primary' aria-label='add' size='small' onClick={leaveformpage}>
            <Add />
          </Fab>
        </Stack>
        <Drawer anchor='right' open={openForm} onClose={leaveformpage} sx={{ position: "relative", zIndex: '9999', width: "100vw" }}>
          <Userform user={user} />
        </Drawer>
      </Stack>

      <Card style={{ height: 410, maxwidth: '100vw', margin: "20px" }}>
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

export default User_report;