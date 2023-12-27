import React from "react";
import Button from "@mui/material/Button";
import { Delete, Verified } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Home = () => {
  return (
    <>
      <Button
        variant="contained"
        color="error"
        startIcon={<Delete />}
        sx={{ mr: "auto", ml: "auto", display: "flex" }}
      >
        Delete
      </Button>
      <IconButton size="large" color="info">
        <Verified fontSize="large" />
      </IconButton>
    </>
  );
};

export default Home;
