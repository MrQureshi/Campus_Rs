import React from 'react';
// import { Link } from 'react-router-dom';

import Dashboard from './Dashboard'
import Login from './loginForm'
// import Profile from './profile'
// import Signin from './signupForm'

import AuthUserContext from './AuthUserContext';

// import * as routes from '../constants/routes'

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
const NavigationAuth = () =>
<div>
    <Dashboard />
    {/* <Profile/> */}
</div>

const NavigationNonAuth = () =>
  <div>{
    <Login/>  
    }
  </div>
  // <div>
  //   <ul>
  //     <li><Link to={routes.APP}>App</Link></li>
  //     <li><Link to={routes.LOGIN}>Login</Link></li>
  //     <li><Link to={routes.SIGNUP}>Signin</Link></li>
  //     <li><Link to={routes.PROFILE}>Profile</Link></li>
  //     <li><Link to={routes.DASHBOARD}>Dashboard</Link></li>
  //   </ul>
  // </div>

export default Navigation; 