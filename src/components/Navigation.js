import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes'

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.LOGIN}>Login</Link></li>
      <li><Link to={routes.SIGNUP}>Signin</Link></li>
      <li><Link to={routes.PROFILE}>Profile</Link></li>
      <li><Link to={routes.DASHBOARD}>HOME</Link></li>
    </ul>
  </div>

export default Navigation; 