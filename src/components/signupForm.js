import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Button } from 'material-ui';

// import { Link } from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
  };
  export default (
) =>
<div className={styles.root}>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="display2" color="inherit" style={styles.flex}   >
                Signup
            </Typography>
            
            <Button color="inherit">SignIn</Button>
        </Toolbar>
    </AppBar>
</div>