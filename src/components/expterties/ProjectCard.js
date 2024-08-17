import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Grow from '@mui/material/Grow';

function ProjectCard({Text,Title,Image}) {
    const [checked, setChecked] = React.useState(false);
    const timeOut = 3000
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="l">
    <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...( { timeout: timeOut } )}
        >

      <Box sx={{  maxHeight: '40%',width:'100%',padding:'1rem'}}maxWidth="m" >
        <Typography variant='h3' >{Title?Title:"Title"}</Typography>
        <>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="220"
        width='10rem'
        image={Image?Image:"https://via.placeholder.com/150"}
        alt="Placeholder image"
      />
      </Card>
      <Box sx={{ padding:'1rem',float:"left",marginLeft:'25rem',marginTop:'-10rem'}} maxWidth='sm' >
      <Typography variant="body1" gutterBottom>
        {Text?Text:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam."}
      </Typography>
      </Box>
      </>
        </Box>
        </Grow>
    </Container>
  </React.Fragment>
  )
}

export default ProjectCard