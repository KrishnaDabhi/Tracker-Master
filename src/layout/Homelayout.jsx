import { Box, styled } from '@mui/material'
import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../section/user/Sidebar';

const MainContainer = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  minHeight: `calc(100vh - 90px)`,
  // marginLeft: "10px",
  marginTop: theme.spacing(8),
  // padding: theme.spacing(4),
  borderRadius: "10px",
  ...(!open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    width: `calc(100% - 65px)`
  }),

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


function Homelayout() {
  return (
    <>
      <Box display='flex' width='100%'>
        <Sidebar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Box>
    </>
  )
}

export default Homelayout