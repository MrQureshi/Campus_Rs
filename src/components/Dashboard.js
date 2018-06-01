import React from 'react';
import {AppBar, Toolbar, Typography } from 'material-ui';
import Logout from './Signout'
import {Grid, Paper} from 'material-ui'

import withAuthorization from './withAuthorization';


const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    paper: {
        padding:20, 
        marginTop:10, 
        marginBottom: 10,
        marginLeft: 6,
        marginRight: 6,
        height:570,
        overflowY: 'auto'
    }
  };
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(
    <div className={styles.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="display2" color="inherit" style={styles.flex}   >
                    DASHBOARD
                </Typography>
                <Logout />
                {/* <Button  color="inherit">Logout</Button>    */}
            </Toolbar>
        </AppBar>
        <Grid container 
            // spacing={16} 
        >
            <Grid item justify="center" xs={4}>
                <Paper  style={styles.paper} > 
                
                </Paper>
            </Grid>
            <Grid item justify="center" xs={8}>
                <Paper style={styles.paper} >

                </Paper>
            </Grid>
        </Grid>
    </div>
)