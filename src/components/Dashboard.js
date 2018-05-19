import React from 'react';
import {AppBar, Toolbar, Typography, Button } from 'material-ui';


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
                ADMIN
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
</div>