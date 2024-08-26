import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
function NavBar({activeTab,tablchangehandler,tablhandler}) {
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

                    <Tabs value={activeTab}
                        onChange={tablchangehandler}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >   
                       <Tab label="Home" sx={activeTab== 0 ? { color: 'white', backgroundColor: 'black' } : defaultTabStyle} onClick={()=>{tablhandler(0)}} />
                       
                        <Tab label="Projects" sx={activeTab === 1 ? { color: 'white', backgroundColor: 'black' } :defaultTabStyle} onClick={()=>{tablhandler(1)}}/>
                        <Tab label="Contact" sx={activeTab === 2 ? { color: 'white', backgroundColor: 'black' } : defaultTabStyle} onClick={()=>{tablhandler(2)}}/>
                    </Tabs>
                </AppBar>
            </Box>


        </div>
    )
}

export default NavBar