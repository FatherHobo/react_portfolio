import React from "react";
import {Toolbar, AppBar, Typography} from "@mui/material";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
}));

export default function Header() {
    const { header, logo } = useStyles();

    const displayDesktop = () => {
        return <Toolbar>{femmecubatorLogo}</Toolbar>;
    };

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Femmecubator
        </Typography>
    );

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}