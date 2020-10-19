import React from 'react';
/** styling */
import { makeStyles } from '@material-ui/core/styles';
/** components from material UI */
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
/** icons */
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto'
    },
    tab: {        
        minWidth: 20
    }
});

/** modify the tab items here */
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

export default function TopMenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };    

    return (      
        <Tabs
            value={value}
            onChange={handleChange}    
            className={classes.root}        
        >
            {tabs.map((tab, index) => (
                <Tab
                    key={`${tab}${index}`}
                    icon={tab.icon}
                    aria-label={tab.ariaLabel}
                    className={classes.tab}
                >                    
                </Tab>
            ))}
        </Tabs>
    );
}