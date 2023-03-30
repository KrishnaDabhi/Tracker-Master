import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {sideBardata,arr} from '../Data/sidebardata'

function Sidebarmenu() {

  const navigate = useNavigate();
  console.log("arr",arr);
  return (
    <>
      <List>
        {arr.map((text,key) => (
          <ListItem key={key} disablePadding >
              <ListItemButton onClick={()=> navigate(text.path)}>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.iconname} />
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Sidebarmenu