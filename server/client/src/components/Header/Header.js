import React, { useState } from 'react';
/** styling */
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
/** components from material UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
/** components from material UI */
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuIcon from '@material-ui/icons/Menu';
/** header components */
import SideDrawer from './SideDrawer';
import TopMenu from './TopMenu';

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

/** @description Button pop up to scroll to the top when scrolling down */
function ScrollTop({ children }) {    
    const classes = useStyles();    
    const trigger = useScrollTrigger({ disableHysteresis: true });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#scroll_back_to_top');
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

/** @description Styling */
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),     
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    Fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
}));

/** @description Header contains two children: SideDrawer and TopMenu */
export default function Header(props) {
  const classes = useStyles(); 
  const theme = useTheme();

  // detects if screen size reaches below medium
  const isViewSizeBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {setDrawerOpen(true);};
  const handleDrawerClose = () => {setDrawerOpen(false);};

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline /> 
        <Toolbar id="scroll-back-to-top"/>
        {/* Header children components */}
        <ElevationScroll {...props}>
          <AppBar 
            position="fixed"            
            className={clsx(classes.appBar, {
              [classes.appBarShift]: drawerOpen, 
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: drawerOpen,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Job App Tracker</Typography>              
              { isViewSizeBelowMedium ? null : <TopMenu/> }
            </Toolbar>
          </AppBar>          
        </ElevationScroll>

        {/* passing event handler and states to drawer child component */}
        <SideDrawer           
          drawerOpen={drawerOpen}
          handleDrawerClose={handleDrawerClose}                    
        />

        {/* triggered function by scrolling*/}
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll_back_to_top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </React.Fragment>
  );
}
