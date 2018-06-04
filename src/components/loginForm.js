import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Grid, Paper } from 'material-ui';
import { TextField, Button } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes'

import { auth } from '../firebase';
import { SignUpLink } from './signupForm';
// import PasswordForgetLink from './ForgetPassword'

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
        height: 330,
        overflowY: 'auto',
    },

};

const LoginPage = ({ history }) =>
    <Fragment >
        <AppBar position="static">
            <Toolbar>
                <Typography align="center" variant="display2" color="inherit" style={styles.flex}   >
                    Login
                </Typography>
                {/* <Button color="inherit"> Login</Button> */}
            </Toolbar>
        </AppBar>
        <Grid container>
            <Grid style={styles.flex} item justify="center" xs={8}>
                <Paper style={styles.paper} >
                    <LoginForm history={history} />
                    <p>
                        <Link to="/forgetpassword">Forgot Password?</Link>
                    </p>
                    <SignUpLink />
                </Paper>
            </Grid>
        </Grid>
    </Fragment>

const initialState = {
    email: '',
    password: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };
    }

    onSubmit = (event) => {
        const {
        email,
            password,
    } = this.state;

        const {
        history,
    } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
            email,
            password,
            error,
          } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form className={FormControl} onSubmit={this.onSubmit}>
                <FormControl fullWidth className={FormControl}>
                    <TextField
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        label="Email"
                        margin="normal"
                    /><br />
                    <TextField
                        label="Password"
                        value={password}
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                        margin="normal"
                        type="password"
                    />
                    <br />

                    <Button
                        disabled={isInvalid}
                        type="submit"
                        color="primary"
                        variant="raised" >Login</Button>
                    <br />
                </FormControl>
                {error && <p>{error.message}</p>}
            </form>

        )
    }
}


export default withRouter(LoginPage);

export {
    LoginForm,
};
