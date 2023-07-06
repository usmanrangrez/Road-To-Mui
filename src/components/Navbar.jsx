import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "4px",
    width: "40%",
  });

  const Icons = styled(Box)({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          USMAN
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge
            sx={{ display: { xs: "none", sm: "block" } }}
            badgeContent={4}
            color="error"
          >
            <Mail />
          </Badge>
          <Badge
            sx={{ display: { xs: "none", sm: "block" } }}
            badgeContent={4}
            color="error"
          >
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{
              marginBottom: "2px",
              width: 28,
              height: 28,
              cursor: "pointer",
            }}
          >
            U
          </Avatar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(!open)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
