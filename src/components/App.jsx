import React from 'react';
import { CssBaseline } from '@mui/material';
import {Route, Switch} from 'react-router-dom';
import {GameInformation,Games, Navbar,Profile} from './index';
import useStyles from './styles';


const App = () => {
  const classes=useStyles();

  return (
   <div className={classes.root}>
     <CssBaseline />
     <Navbar />
     <main className={classes.content}>
       <div className={classes.toolbar}>
       <Switch>
            <Route exact path ="/game/:id">
              <GameInformation />
            </Route>
            <Route exact path="/">
                <Games />
            </Route>
            <Route exact path ="/profile/:id">
                <Profile />
            </Route>
        </Switch>
       </div>
     </main>
    
   </div>
  )
}

export default App;