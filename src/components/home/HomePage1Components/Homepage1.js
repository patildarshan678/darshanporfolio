import './Homepage1.css'
import React from 'react'

import Container from '@mui/material/Container';
import Cards from './Cards';
function Homepage1() {
    const ContainerStyle = {backgroundColor: 'yellow',
    'min-height': '100vh',

}
  return (
    <Container maxWidth="s" style={ContainerStyle}>

        <h2>Key skills</h2>
        <Cards/>
    </Container>
  )
}

export default Homepage1