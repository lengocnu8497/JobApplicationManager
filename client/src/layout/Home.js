import React, { useState, useEffect } from 'react';
import { API } from '../config';
import DashboardTabs from '../components/DashboardTabs';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Job Applications Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
    <Toolbar />
    <div className={classes.drawerContainer}>
        <List>
        {[ 'Settings', 'Profile'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <AccountCircleIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
    </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {/* REFACTOR THIS */}
        <Grid container spacing={3}>
            {/* horizontal list of cards */}
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar image=""></Avatar>
                        }
                        title="Amazon"
                        subheader="Applied"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography> 
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        avatar={
                            <Avatar image=""></Avatar>
                        }
                        title="Google"
                        subheader="Applied"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography> 
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        avatar={
                            <Avatar image=""></Avatar>
                        }
                        title="Facebook"
                        subheader="Applied"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography> 
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        avatar={
                            <Avatar image=""></Avatar>
                        }
                        title="Microsoft"
                        subheader="Applied"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography> 
                    </CardContent>
                </Card>
            </Grid>
            {/* contains 3 cards */}
            <Grid item xs={8}>
                <DashboardTabs/>
            </Grid>
      </Grid>
      </main>
    </div>
  );
}
