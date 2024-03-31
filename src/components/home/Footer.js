import './Footer.css'
import React from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Chip, Grid, Icon, Paper, Typography, createTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from '@emotion/react';
import LinkedInLogo from './../../resources/LinkedInLogo.png'
import linkedin from './../../resources/linkedin.svg'
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/base';
const ContactInfo = [
    {
        Title: 'LinkedIn',
        URL: 'https://www.linkedin.com/in/darshan-patil-b67434122/'
    },
    {
        Title: 'Gmail',
        URL: 'patildarshan678@gmail.com'
    }
]

function renderFooter(Contact, value) {
    return (
        <Grid key={value} item>

            <img src={linkedin} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
    )
}
function Footer() {
    const ContainerStyle =
    {
        backgroundColor: '#BC986A',
        'min-height': '50vh',
        'min-width': '100%'

    }
    const fontStylesheet = {
        float: 'left',
        color: '#F5F5F5',
        fontFamily: 'sans-serif',
    }
    const GrindStyleSheet = {
        display: 'flex', 
        alignItems: 'center',
        marginTop:'2rem'

    }
    const iconstyle = {
        marginLeft: '1rem',

    }
    return (
        <>
            <Container sx={ContainerStyle} >
                <Typography variant="h3" sx={fontStylesheet} >
                    Contact us
                </Typography>
        
                <Grid container spacing={1}>
                    
                    <Grid xs={8} sx={GrindStyleSheet}>
                        
                        <Stack direction="row" alignItems="left" gap={3}>
                            <LinkedInIcon sx={iconstyle} />
                            <Typography variant="body1"><a href='https://www.linkedin.com/in/darshan-patil-b67434122/' target='_blank'> https://www.linkedin.com/in/darshan-patil-b67434122/</a></Typography>
                        </Stack>  
                         </Grid>
                        <Grid xs={8} sx={GrindStyleSheet}>
                        
                        <Stack direction="row" alignItems="left" gap={3}>
                            <MailIcon sx={iconstyle} />
                            <Typography variant="body1"> patildarshan678@gmail.com</Typography>
                        </Stack>   </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Footer