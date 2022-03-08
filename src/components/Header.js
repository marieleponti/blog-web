import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { mergeClasses } from '@material-ui/styles';
import App from '../App';
//import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      //TODO add font family
    },
}));

const Header =()=>{
    const classes = useStyles();
    return (
        <div>
            <AppBar classname={classes.root}>
                <Toolbar>
                    <h1>Friends Blog</h1>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;