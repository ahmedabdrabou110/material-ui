import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Typography noWrap component="h1" variant="h1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eos ut
        aut, atque quaerat in!
      </Typography>
      
      <Outlet />
    </div>
  );
};

export default Root;
