import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    typographyStyle: {
        flex: 1
    } 
})
const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyle}>
                    TITLE
                </Typography>
                <AppleIcon />
            </Toolbar>
        </AppBar> 
    )
}

export default Header;