import './Footer.css'
import React from 'react'

import Container from '@mui/material/Container';
function Footer() {
    const ContainerStyle = 
    {
    backgroundColor: 'green',
    'min-height': '50vh',
    'min-width':'100%'

}
    return (
        <>
            <Container sx={ContainerStyle}>
                <h2>This is footer</h2>
                </Container>
        </>
    )
}

export default Footer