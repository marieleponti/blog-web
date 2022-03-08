import {makeStyles} from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { Link as Scroll } from 'react-scroll';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import bgImage from './assets/mountain.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + bgImage})`,
    backgroundSize: 'cover',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

export default App;
