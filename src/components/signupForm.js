import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Grid, Paper } from 'material-ui';
import { TextField, Button } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    paper: {
        padding: 20,
        paddingTop: 20,
        marginLeft: '50%',
        marginTop: 50,
        marginBottom: 10,
        height: 480,
        overflowY: 'auto',
    },
    textMargin: {
        marginTop: 15,
        marginBottom: 5
    },

};



const SignUpPage = ({ history }) =>
    <Fragment >
        <AppBar position="static">
            <Toolbar>
                <Typography align="center" variant="display2" color="inherit" style={styles.flex}   >
                    Signup
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container>
            <Grid style={styles.flex} item justify="center" xs={8}>
                <Paper style={styles.paper} >
                    <SignUpForm history={history} />
                </Paper>
            </Grid>
        </Grid>
    </Fragment>

const initialState = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };
    }
    onSubmit = (event) => {
        const {
          username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
          } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ ...initialState }));
                history.push(routes.DASHBOARD);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form className={FormControl} onSubmit={this.onSubmit}>
                <FormControl fullWidth className={FormControl}>
                    <TextField
                        value={username}
                        onChange={event => this.setState(byPropKey('username', event.target.value))}
                        label="User Name"
                        margin="normal"
                    /><br />
                    <TextField
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        label="Email"
                        margin="normal"
                    /><br />
                    <TextField
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        label="Password"
                        margin="normal"
                        type="password"
                    /><br />
                    <TextField
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        label="Confirm Password"
                        margin="normal"
                        type="password"
                    /><br />
                    <Button
                        color="primary"
                        variant="raised"
                        disabled={isInvalid}
                        type="submit"
                    >Signup</Button>
                    <br />

                </FormControl>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignUpLink = () =>
<p>
  Don't have an account?
  {' '}
  <Link to={routes.SIGNUP}>Sign Up</Link>
</p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink
  };