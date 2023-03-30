import { Card} from '@mui/material'
import { DataGrid} from '@mui/x-data-grid'
import React from 'react';

const columns = [
    {
        flex: 0.2,  
        field: 'Date',
        headerName: 'Date',
        width:165,
        editable:false,
      },

    {
      flex: 0.2,  
      field: 'Work_in',
      headerName: 'Work In',
      width:165,
      editable:false,
    },
    {
      flex:0.2,  
      field: 'Work_Out',
      headerName: 'Work Out',
      width:165,
      editable:false,
    },
    {
        flex: 0.2,  
        field: 'Break_Time',
        headerName: 'Break Time',
        sortable: false,
        width:165,
        editable:false,
      },
      {
        flex: 0.2,  
        field: 'Total_worktime',
        headerName: 'Total Work Time',
        sortable: false,
        width:165,
        editable:false
      },
  ];
  
  const data = [{
    id :1,
    Date :'06-12-2023',
    Work_in : " 9.30 AM",
    Work_Out : " 6.30 AM",
    Total_worktime :"8:30 hrs",
    Break_Time : "20.21 min"
   
}]

function WorktimeGrid() {

    return (
        <>               
                <Card style={{ height: 400, maxwidth: '100vw',margin:"20px" }}>
                    <DataGrid 
                    rows={data}
                    columns={columns}
                    rowsPerPageOptions={[25,50,75,100]}
                    sx={{fontSize:"16px","& .MuiDataGrid-cell--textRight":{display:"flex",justifyContent:'left'}}}
                     />
                </Card>
        </>
    )
}

export default WorktimeGrid