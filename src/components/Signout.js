import React from 'react';

import { Button} from 'material-ui';

import { auth } from '../firebase'

const LogoutButton = () =>
<Button 
    type="button"
    onClick={auth.doSignOut}
    color="inherit" >Logout</Button>

  

export default LogoutButton;