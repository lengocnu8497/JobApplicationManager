import React, { useState, useEffect } from 'react';

// import { API } from './API';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { useCookies } from 'react-cookie';



const Auth = () => {
    const styles = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ isLoginView, setIsLoginView ] = useState(true);
    

    const [token, setToken, deleteToken] = useCookies(['usr-token']);  

    useEffect(() => {
        console.log(token);
        if(token['usr-token']) window.location.href = '/dashboard';
    }, [token]);

    const loginClicked = () => {
    //     API.loginUser({username, password}, token['usr-token'])
    //     .then( resp => setToken('usr-token', resp.token))
    //     .catch( error => console.log(error))
    // };
        console.log("clicked");
    };

    const registerClicked = () => {
    //     API.registerUser({username, password})
    //     .then( resp => loginClicked())
    //     .catch( error => console.log(error))
    // }
        console.log("clicked");
    };

    const logoutUser = () => {
        deleteToken(['usr-token']);
    };

   

    return (
        <Container maxWidth="md" className={styles.container}>
             {isLoginView ? <h2>Signup</h2> : <h2>Login</h2>}
                <TextField
                    required 
                    id="standard-required" 
                    label="Username" 
                    onChange={event => setUsername(event.target.value)}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password" 
                    onChange={event => setPassword(event.target.value)}    
                />
                {isLoginView ?
                    <Button 
                        size="small"
                        variant="contained"
                        onClick={registerClicked} 
                        className={styles.button}
                    >
                        Register
                    </Button> 
                    :
                    <Button 
                    size="small"
                    variant="contained"
                    onClick={loginClicked} 
                    className={styles.button}
                    >
                        Sign in
                    </Button> 
                }
            {isLoginView ?
                    <p className={styles.p} style={{cursor:'pointer'}} onClick={() => setIsLoginView(false)}>Already have an account? Login here.</p>:
                    <p className={styles.p} style={{cursor:'pointer'}} onClick={() => setIsLoginView(true)}>Don't have an account? Register here.</p>
            }
        </Container>
    );
}

const useStyles = makeStyles({
    container: {
        height: '95vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3f51b5',
    },
    button: {
        marginTop: '30px',
        color: '#3f51b5',
    },
    p: {
        marginTop: '30px',
    },
});



export default Auth;