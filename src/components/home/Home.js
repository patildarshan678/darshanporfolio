import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Img1 from './../../resources/Image1.jpg'
import Image2 from  './../../resources/Image2.jpg'
import './Home.css'
function Home() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    const CarouselStyle = {
        'max-height': "50%"
    }
    return (
        <>
        <CssBaseline />
      <Container maxWidth="s" style={{backgroundColor: 'red'}}>
         <Carousel >
            {
                items.map(RenderImage)
            }
        </Carousel>
      </Container>
       
        </>
    )
}
function RenderImage(item, i)
{
    const CurrentImage = getImage(i)
    return(
        <Item key={i} item={item} img={CurrentImage} />
    );
}
function getImage(index)
{
    switch (index) {
        case 0:
            return Img1
            break;
        case 1:
            return Image2
    
        default:
            break;
    }
}
function Item(props,index)
{
    const stylesheet ={
        'flex-grow': 1,/* Or any other color you want */
        'max-width': '100%',
        'max-height':'70vh'
    }
    console.log(index);
    return (
        <Paper sx={stylesheet}>
            <h2>{props.item.name}</h2>
            
            <img src={props.img} className='image'/>

        </Paper>
    )
}

export default Home