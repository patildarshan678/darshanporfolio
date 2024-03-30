import { Container } from '@mui/system'
import './SubPoster.css'
import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FullStackDevImage from './../../../resources/FullStackDevImage.webp'

function SubPoster() {
    const ContainerStyle = {
        'max-width': '33vw',
        'min-height':'100%',
        float: 'left',
        backgroundColor:''
    }
    const xs = 6
const md = 4
const GridStyleSheet = {
    'max-width': '33vw',
    'min-height':'45vh',
    'padding':'1 rem',
    
}
  return (
    <>
    <Container maxWidth="s" style={ContainerStyle}>
    <Grid item xs={xs} md={md} sx={GridStyleSheet}>
        
        <img src={FullStackDevImage}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </Grid>
        
        <Grid item xs={xs} md={md} sx={GridStyleSheet}>
        <Typography variant="h6" gutterBottom>
        Step into my immersive digital ecosystem, where the artistry of front-end design converges with the engineering prowess of back-end development, resulting in seamless, end-to-end solutions that epitomize the breadth and depth of my full stack expertise.
        </Typography>
        </Grid>
    </Container>
    </>
  )
}

export default SubPoster