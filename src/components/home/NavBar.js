import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
function NavBar() {
    const [value, setValue] = React.useState(0);
    const defaultTabColor= ' #F5F5DC'
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function tablhandler(index)
    {
        switch (index) {
            case 0:
                navigate("/")
              // Code to be executed if expression matches value1
              break;
            case 1:
                navigate("/experience")
              // Code to be executed if expression matches value2
              break;
            // Add more cases as needed
            case 2:
                navigate("contact")
            default:
              // Code to be executed if expression doesn't match any case
          }
    }
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
                       <Tab label="Home" sx={value === 0 ? { color: 'white', backgroundColor: 'black' } : defaultTabStyle} onClick={()=>{tablhandler(0)}} />
                       
                        <Tab label="Experience" sx={value === 1 ? { color: 'white', backgroundColor: 'black' } :defaultTabStyle} onClick={()=>{tablhandler(1)}}/>
                        <Tab label="Contact" sx={value === 2 ? { color: 'white', backgroundColor: 'black' } : defaultTabStyle} onClick={()=>{tablhandler(2)}}/>
                    </Tabs>
                </AppBar>
            </Box>


        </div>
    )
}

export default NavBar