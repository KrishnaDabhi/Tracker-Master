import { Menu, ArrowBack, ArrowForward} from '@mui/icons-material';
import { AppBar as MuiAppBar, Drawer as MuiDrawer, Box, CssBaseline,useTheme, styled, Divider, Toolbar, IconButton } from '@mui/material'
import React from 'react';
import { drawerWidth } from '../../config/Constants.config';
import '../../Data/sidebardata'
import Sidebarmenu from '../Sidebarmenu';
import Header from './Header';
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    background:"white",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
        }),
    ...(open && {
       marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
export default function Sidebar () {
const [open ,setOpen]= React.useState(true);
const theme = useTheme();

const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  return ( 
    <Box>
      <AppBar position="fixed" open={open} elevation={1} >
        <CssBaseline/>
        <Toolbar>
          {/* <Divider/> */}
          <IconButton
            // color="inherit"
            // aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              ...(open && { display: 'none' }),
            }}
          >
            <Menu color='primary'/>
          </IconButton>
          <Header/>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>  
      <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ArrowForward color='primary'/> : <ArrowBack color='primary' sx={{fontSize:'35px'}} />}
          </IconButton>
        </DrawerHeader>
      <Divider/>    
       <Sidebarmenu/>
      </Drawer>
  </Box>

  )
}

 