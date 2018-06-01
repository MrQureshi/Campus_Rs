import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';


// import withAuthentication from './withAuthentication';

import Navigation from './Navigation'
import Loginform from './loginForm'
import Signupform from './signupForm'
import Profile from './profile'
import Dashboard from './Dashboard'
import Forgetpassword from './ForgetPassword'

import * as routes from '../constants/routes'
// import { firebase } from '../firebase';

const App = () =>
   
            <Router>
                <div>
                    <Navigation />
                    <Route
                        exact path={routes.LOGIN}
                        component={() => <Loginform />}
                    />
                    <Route
                        exact strict path={routes.SIGNUP}
                        component={() => <Signupform />}
                    />
                    <Route
                        exact path={routes.DASHBOARD}
                        component={() => <Dashboard />}
                    />
                    <Route
                        exact path={routes.PROFILE}
                        component={() => <Profile />}
                    />

                    <Route
                        exact path={routes.FORGETPASSWORD}
                        component={() => <Forgetpassword />}
                    />
                </div>
            </Router>
   

export default App;
