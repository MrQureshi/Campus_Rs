import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';


import withAuthentication from './withAuthentication';

import Navigation from './Navigation'
import Loginform from './loginForm'
import Signupform from './signupForm'
import Profile from './profile'
import Dashboard from './Dashboard'
import Forgetpassword from './ForgetPassword'

import * as routes from '../constants/routes'
import { firebase } from '../firebase';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }
    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser} />
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
        )
    }
}

export default withAuthentication(App);
