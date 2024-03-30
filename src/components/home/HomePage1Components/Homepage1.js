import './Homepage1.css'
import React from 'react'
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Cards from './Cards';
const fontStylesheet ={ fontFamily: 'Roboto' }
function Homepage1() {
    const ContainerStyle = {backgroundColor: '',
    'min-height': '105vh',

}
  return (
    <Container maxWidth="s" style={ContainerStyle}>
<br/>
<Typography variant="h5"  sx={fontStylesheet}>
Full Spectrum: A Full Stack Developer's Portfolio
      </Typography>
      <br/>
        <Cards/>
    </Container>
  )
}

export default Homepage1