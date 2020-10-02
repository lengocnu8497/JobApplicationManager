import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto'
    },
    tab: {        
        minWidth: 20
    }
});

export default function TopMenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const tabs = [
        {
            icon: <PersonPinIcon />,
            ariaLabel:"person"
        },
        {
            icon: <PersonPinIcon />,
            ariaLabel:"person"
        },
        {
            icon: <PersonPinIcon />,
            ariaLabel:"person"
        }
    ];

    return (      
        <Tabs
            value={value}
            onChange={handleChange}    
            className={classes.root}        
        >
            {tabs.map(tab => (
                <Tab
                    icon={tab.icon}
                    aria-label={tab.ariaLabel}
                    className={classes.tab}
                >                    
                </Tab>
            ))}
        </Tabs>
    );
}