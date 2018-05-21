import React, { Component, Fragment } from 'react';
import {AppBar, Toolbar, Typography, Button } from 'material-ui';
import {Grid, Paper} from 'material-ui';
// import { TextField, Button } from 'material-ui';
// import { FormControl } from 'material-ui/Form';
// import { Link } from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    paper: {
        padding:20,
        marginLeft:'50%',
        marginTop:10, 
        marginBottom: 10,
        height:570,
        overflowY: 'auto',
    },
    
  };
  export default () => 
  <Fragment className={styles.root}>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="display2" color="inherit" style={styles.flex}   >
                Login
            </Typography>
            {/* <Button color="inherit"> Login</Button> */}
        </Toolbar>
    </AppBar>
    <Grid container spacing={16}>
        <Grid style={styles.flex} item justify="center" xs={8}>
            <Paper style={styles.paper} >
                
            </Paper>
        </Grid>
    </Grid>
</Fragment>
// class Loginform extends Component {
//     render(){
//         return
//         <div className={styles.root}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Typography variant="display2" color="inherit" style={styles.flex}   >
//                         Login
//                     </Typography>
//                     <Button color="inherit"> Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     }
// }
// export default Loginform;