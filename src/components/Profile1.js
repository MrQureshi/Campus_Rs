import React, {Component, } from 'react'
import {Grid, Paper} from 'material-ui'

const styles  = {
    paper: {
        padding:20, 
        marginTop:10, 
        marginBottom: 10,
        height:570,
        overflowY: 'auto'
    }
  }
// class Main extends Component {

// render() {
//     return
//     }
// }

export default () =>
<Grid container spacing={16} >
<Grid item justify="center" xs={4} >
    <Paper style={styles.paper} > 
    
    </Paper>
</Grid>
<Grid item justify="center" xs={8}>
    <Paper style={styles.paper} >

    </Paper>
</Grid>
</Grid>

// export Main;