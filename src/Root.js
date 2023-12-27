import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Link } from "@mui/material";

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Link
            href="/"
            color="inherit"
            fontSize={20}
            underline="none"
            sx={{ flexGrow: 1, "&:hover": { fontSize: "20.75px" } }}
          >
            My expenses
          </Link>
          <Typography variant="body1" color="white" mr={2}>
            Ahmed Abdrabou
          </Typography>
          <Avatar alt="Ahmed Abdrabou" src="./images/ahmed.jpg" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default Root;
