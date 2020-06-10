import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    myStyle: {
        fontStyle: "oblique",
        backgroundColor: "purple",
        color: "white",
        padding: "1rem"
    }
})

const Typography_ = () => {
    const classes = useStyles();
    return (
    <>
        <Typography>Typography Text</Typography>
        <Typography color="primary">Primary Colored Typography</Typography>
        <Typography variant="h3">h3 Variant Typography</Typography>
        <Typography className={classes.myStyle}>
            Using makeStyles function for styles
        </Typography>
    </>
    )
}

export default Typography_;