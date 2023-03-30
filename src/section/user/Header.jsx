import {
  Box,
  Stack,
  Typography,
  Popper,
  Avatar,
  Card,
  Divider,
} from "@mui/material";
import IconButton from "../../core/IconButton";
import React, { useState } from "react";
import {
  Lock,
  NightlightRound,
  Notifications,
  Person,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Header() {
  const [ProfilePopper, setProfilePopper] = useState(null);
  const [mode, setMode] = useState("light");
  const nav = useNavigate();

  const openPopper = (event) => {
    setProfilePopper(ProfilePopper ? null : event.currentTarget);
  };

  const open = Boolean(ProfilePopper);
  const id = open ? "simple-popper" : undefined;
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  console.log(email);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    nav("/");
  };
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        sx={{
          backgroundColor: mode === "light" ? "white" : "black",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          paddingLeft={1}
          color="primary"
          sx={{ cursor: "pointer" }}
        >
          {JSON.parse(username)}
        </Typography>
        <Stack direction="row" width="85px" justifyContent="space-between">
          <IconButton>
            <Notifications color="primary" sx={{ fontSize: "30px" }} />
          </IconButton>
          <IconButton aria-describedby="id" onClick={openPopper}>
            <Person color="primary" sx={{ fontSize: "30px" }} />
          </IconButton>
          <Popper id={id} open={open} anchorEl={ProfilePopper}>
            <Card>
              <Stack padding="22px">
                <Stack direction="row" paddingBottom={1.5}>
                  <Box paddingRight={2}>
                    <Avatar alt="John">R</Avatar>
                  </Box>
                  <Stack>
                    <Typography fontSize="15px" color="black" fontWeight="bold">
                      {JSON.parse(username)}
                    </Typography>
                    <Typography fontSize="14px">{JSON.parse(email)}</Typography>
                  </Stack>
                </Stack>
                <Divider />
                <Stack>
                  <Stack direction="row" paddingTop={2} alignItems="center">
                    <Box paddingRight={2.5}>
                      <Person sx={{ fontSize: "30px" }} />
                    </Box>
                    <Typography fontSize="15px">Account Setting</Typography>
                  </Stack>
                  <Stack>
                    <Stack direction="row">
                      <Box paddingRight={3}>
                        <Lock sx={{ fontSize: "25px" }} />
                      </Box>
                      <Typography
                        fontSize="15px"
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleLogOut()}
                      >
                        Sign Out
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </Popper>

          <IconButton color="primary">
            <NightlightRound
              sx={{ fontSize: "30px" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"}
            </NightlightRound>
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

export default Header;
