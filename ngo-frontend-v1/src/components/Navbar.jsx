import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context";

const Navbar = () => {
    const { logOut, user } = useAuth();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {user.user.name}'s Dashboard
                </Typography>
                <Button
                    onClick={logOut}
                    color="inherit"
                    startIcon={<BiLogOut />}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
