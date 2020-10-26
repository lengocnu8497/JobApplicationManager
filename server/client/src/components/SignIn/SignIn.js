import React, { useState, useEffect } from 'react';

// import { API } from './API';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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
        <Container maxWidth="sm">
            <h2 className={styles.logo}>advisor view</h2>
            <div className={styles.form}>
                <TextField
                    required 
                    id="standard-required" 
                    label="Username" 
                    onChange={event => setUsername(event.target.value)}
                />
            </div>
            <form className={styles.form}>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password" 
                    onChange={event => setPassword(event.target.value)}    
                />
            </form>
            <div  className={styles.button} >
                {isLoginView ?
                    <Button 
                        size="medium"
                        variant="contained"
                        onClick={registerClicked} 
                    >
                        Register
                    </Button> 
                    :
                    <Button 
                    size="medium"
                    variant="contained"
                    onClick={loginClicked} 
                    >
                        Log in
                    </Button> 
                }
            </div>  
            {isLoginView ?
                    <p className={styles.p} style={{cursor:'pointer'}} onClick={() => setIsLoginView(false)}>Already have an account? Login here.</p>:
                    <p className={styles.p} style={{cursor:'pointer'}} onClick={() => setIsLoginView(true)}>Don't have an account? Register here.</p>
            }
        </Container>
    );
}

const useStyles = makeStyles({
    landingContent: {
        position: 'relative',
        backgroundColor: '#e0e0e0',
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',     
    },
    logo: {
        textAlign: 'center',  
        fontWeight: '600', 
    },
    form: {
        paddingTop: '10px',
        paddingLeft: '250px',
    },
    button: {
        paddingTop: '30px',
        paddingLeft: '300px',
    },
    p: {
        paddingTop: '5px',
        paddingLeft: '220px',
    },
});



export default Auth;