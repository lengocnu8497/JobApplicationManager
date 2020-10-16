import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: '200vh', // delete later        
        width: '100%',
        height: '21em',        
        backgroundColor: 'black'
    }
}));

export default function Footer() {
    const classes = useStyles();    
    return (
        <React.Fragment>
            <footer className={classes.footer}/>                    
        </React.Fragment>        
    )
};  