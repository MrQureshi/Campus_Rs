import React,{Component} from 'react';
import {AppBar, Toolbar, Typography, Button } from 'material-ui';

import { BrowserRouter as Router,Route, } from 'react-router-dom';

import Nava from './Navigation'
import Loginform from './loginForm'
import Signupform from './signupForm'

import * as routes from '../constants/routes';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
  };

export default class extends Component{
    handleClick = () => {
        // <Router>
        //     <Route
        //         exact path={routes.LOGIN}
        //         component={() => <Loginform />}
        //     />
        // </Router>
        
        console.log('Clicked')
        
      }

    render(){
        return <div className={styles.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="display2" color="inherit" style={styles.flex}   >
                    ADMIN
                </Typography>
                
                <Button color="inherit"
                onClick={this.handleClick}
                >
                Login
                </Button>
            </Toolbar>
        </AppBar>
        <div>
        <Router>
            <div>
            <Nava />
            <hr/>
            <Route
                exact path={routes.LOGIN}
                component={() => <Loginform />}
            />
            <Route
                exact path={routes.SIGNUP}
                component={() => <Signupform />}
            />
            {/* <Route
                exact path={routes.loginFrom}
                component={() => <loginform />}
            />
            <Route
                exact path={routes.loginFrom}
                component={() => <loginform />}
            /> */}
            </div>
        </Router>
        </div>
    </div>
    }
}
