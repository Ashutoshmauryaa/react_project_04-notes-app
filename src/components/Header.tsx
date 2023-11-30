import React, { FC } from "react";
import { AppBar, Toolbar, Typography, colors } from "@mui/material";
import { Logo } from "../logo/Logo";

const Header: FC = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 60, marginRight: 15 }} />
        <Typography style={{ fontSize: 25 }}> Ever Note</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
