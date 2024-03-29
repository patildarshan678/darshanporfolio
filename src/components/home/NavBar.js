import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function NavBar() {
    const [value, setValue] = React.useState(0);
    const defaultTabColor= ' #F5F5DC'
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const defaultTabStyle ={ backgroundColor: defaultTabColor, color: 'black' }
    return (
        <div className='NavBar_Container'>
            <Box sx={{ bgcolor: '', padding: '2rem' }}>
            <AppBar position="static" sx={{ bgcolor: 'transparent' }}>

                    <Tabs value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                       <Tab label="Home" sx={value === 0 ? { color: 'white', backgroundColor: 'black' } : defaultTabStyle} />
                        <Tab label="Experience" sx={value === 1 ? { color: 'white', backgroundColor: 'black' } :defaultTabStyle} />
                        <Tab label="Contact" sx={value === 2 ? { color: 'white', backgroundColor: 'black' } : defaultTabStyle} />
                    </Tabs>
                </AppBar>
            </Box>


        </div>
    )
}

export default NavBar