import { Container } from '@mui/system'
import React, { useEffect } from 'react'

function Contact({setActiveTab}) {
    const ContainerStyle = {backgroundColor: '',
    'min-height': '105vh',
    'max-width' : '100%',

}
useEffect(() => {
  setActiveTab("Contact",2)
}, [])

  return (
    <>
    <Container maxWidth="s" style={ContainerStyle}>
      <h1>Work In Progress...!!!</h1>
        </Container>
    </>
  )
}

export default Contact
