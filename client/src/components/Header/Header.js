import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

/**
 * @param {children} props content of the app bar component 
 * @description Elevates the app bar when scrolled down
 */
function ElevationScroll({ children }) {  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,    
  });
  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
}

/**
 * @param {children} props content of the app bar component 
 * @description Button pop up to scroll to the top when scrolled down
 */
function ScrollTop({ children }) {    
    const classes = useStyles();    
    const trigger = useScrollTrigger({ disableHysteresis: true });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.Fab}>
          {children}
        </div>
      </Zoom>
    );
  }

/**
 * @description CSS equivalent in Material Design
 */
const useStyles = makeStyles((theme) => ({
    AppBar: {
        position: 'relative',        
    },
    Fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
}));

export default function Header(props) {
  const classes = useStyles(); 
  return (
    <React.Fragment>
      <CssBaseline /> 

      {/* Header children components */}
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar id="back-to-top-anchor">
            <Typography variant="h6">Tracker</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>     

      {/* scrolling triggered function */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
