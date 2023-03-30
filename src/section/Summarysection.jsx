import { Card } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
const columns = [
    {
        flex: 0.2,
        field: 'Sr_No',
        headerName: 'Sr No',
        width: 165,
        editable: false,
      },
    {
      flex: 0.2,
      field: 'Name',
      headerName: 'Name',
      width: 165,
      editable: false,
    },
    {
      flex: 0.2,
      field: 'Work_time',
      headerName: 'Work Time', 
      width: 165,
      editable: false,
    },
    {
      flex: 0.2,
      field: 'Break_time',
      headerName: 'Break Time',
      sortable: false,
      width: 165,
  
    },
    {
      flex: 0.2,
      field: 'Present',
      headerName: 'Present',
      sortable: false,
      width: 165,
      editable: false
    },
    {
      flex: 0.2,
      field: 'Breaks',
      headerName: 'Breaks',
      sortable: false,
      width: 165,
      editable: false
    },
  
  ];
    
  const data = [{
    id:'',
    Sr_No: '',
    Name: " ",
    Work_time: " ",
    Break_time: " ",
    Present: " ",
    Breaks: ' ',
  
  },
 ]

function Summarysection() {
  return (
  <>
  <Card style={{height:"100vh", maxwidth: '100vw',margin:"20px"}}>
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5, 10, 20, 25, 100]}
          pagination
          sx={{ fontSize: "16px", "& .MuiDataGrid-cell--textRight": { display: "flex", justifyContent: 'left' } }}
        />
      </Card>
  </>
  )
}

export default Summarysection