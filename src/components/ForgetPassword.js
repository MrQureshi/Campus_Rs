import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';


import { AppBar, Toolbar, Typography, Grid, Paper, TextField, Button } from 'material-ui';

import { FormControl } from 'material-ui/Form';

import { auth } from '../firebase';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  paper: {
    padding: 20,
    paddingTop: 30,
    marginLeft: '50%',
    marginTop: 100,
    marginBottom: 10,
    height: 200,
    overflowY: 'auto',
  },
};

const PasswordForgetPage = () =>
  <Fragment >
    <AppBar position="static">
      <Toolbar>
        <Typography align="center" variant="display2" color="inherit" style={styles.flex}   >
          Password Forget
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container>
      <Grid style={styles.flex} item justify="center" xs={8}>
        <Paper style={styles.paper} >
          <PasswordForgetForm />
        </Paper>
      </Grid>
    </Grid>
  </Fragment>


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const initialState = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...initialState }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  render() {
    const {
          email,
      error,
        } = this.state;

    const isInvalid = email === '';

    return (
      <form fullWidth onSubmit={this.onSubmit}>
        <FormControl fullWidth  className={FormControl}>
          <TextField
            value={this.state.email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            label="Email"
            margin="normal"
          /><br />
          <Button
            disabled={isInvalid}
            type="submit"
            color="primary"
            variant="raised" >Login</Button>
          <br />
          {error && <p>{error.message}</p>}
          </FormControl >
      </form>
        );
  }
}



export default PasswordForgetPage;

export {
          PasswordForgetForm,
        };