import React from 'react';
import { ClassNames } from '@emotion/react';
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import useStyles from './styles';
import { Menu } from '@mui/icons-material';
const Navbar = () => {
    console.log('Navbar');
    const classes=useStyles();
    const isMobile=useMediaQuery('(max-width:600px)');
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
          color='inherit'
          edge= 'start'
          style={{outline:'none'}}
          onClick={() => {}}
          className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar