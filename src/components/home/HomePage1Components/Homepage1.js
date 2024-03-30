import './Homepage1.css'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Cards from './Cards';
import SubPoster from './SubPoster';
import Button from '@mui/material/Button';
const fontStylesheet ={ fontFamily: 'Roboto' }
function Homepage1() {
  const [showCards, SetshowCards] = useState(false)
    const ContainerStyle = {backgroundColor: '',
    'min-height': '105vh',
    'max-width' : '100%',

}
  return (
    <Container maxWidth="s" style={ContainerStyle}>
<br/>
<Typography variant="h5"  sx={fontStylesheet}>
Full Spectrum: A Full Stack Developer's Portfolio
      </Typography>
      <br/>
      <SubPoster/>
      {showCards ? <Cards/>:<Button variant="contained" onClick={()=>{SetshowCards(v=>!v)}}>Click To See Key Skills..!!</Button>}
        
    </Container>
  )
}

export default Homepage1