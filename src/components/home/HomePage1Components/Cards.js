import './Cards.css'
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Slide } from '@mui/material';
import ReactJsLogo from './../../../resources/ReactJsLogo.jpg'
import NET_Core_Logo from './../../../resources/NET_Core_Logo.svg'
import { Zoom } from '@mui/material';
import NetCoreLogo from './../../../resources/NET_Core_Logo.avif'
import Flask_Logo from './../../../resources/FlaskLogo.png'
import DockerLogo from './../../../resources/DockerLogo.jpg'
import PostGresLogo from './../../../resources/PostGresLogo.png'
import Neo4jLogo from './../../../resources/Neo4j-logo_color.png'

const CardsInfo = [
    {
        'Title': 'React js',
        Description: " Utilizing React's component-based architecture to create an immersive portfolio experience that captivates and engages visitors.",
        cardimage: ReactJsLogo
    },
    {
        'Title': 'ASP.NET Core',
        Description: "Unleash your skills with a dynamic .NET Core portfolio, showcasing your expertise with precision and power.",
        cardimage: NetCoreLogo
    },
    {
        'Title': 'Python Flask',
        Description: "Showcase your talents with a sleek Flask portfolio, powered by Python, delivering elegance and efficiency in every display.",
        cardimage: Flask_Logo
    },
    {
        'Title': 'Docker',
        Description: "Empower your applications with Docker, revolutionizing deployment and scalability with containerization at its core.",
        cardimage: DockerLogo
    },
    {
        'Title': 'PostgresSQL',
        Description: "Elevate your data management with Postgres, harnessing its robust capabilities for efficient storage and seamless scalability",
        cardimage: PostGresLogo
    },
    {
        'Title': 'Neo4j',
        Description: "Transform your data relationships with Neo4j, leveraging its graph database prowess for unparalleled insights and efficiency.",
        cardimage: Neo4jLogo
    }
];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const xs = 6
const md = 4
const GridStyleSheet = {
    'max-width': '60vw',
    float: 'right'
}
function delayedFunction() {
    console.log("Start");

    // Add a delay of 3 seconds (3000 milliseconds)
    setTimeout(() => {
        console.log("Delayed code executed after 3 seconds");
    }, 3000);

    console.log("End");
}
function renderCard(CardInfo) {
    const cardstylesheet = {
        maxWidth: 300,
        minHeight: 300,
        transition: 'all 3s ease'

    }
    console.log(CardInfo);
    return (
        <>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Card sx={cardstylesheet}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="150"
                            image={CardInfo.cardimage}
                            alt={CardInfo.Title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {CardInfo.Title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {CardInfo.Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Zoom>
        </>
    )
}
function renderCards(CardInfo, index) {
    const timeoutId = setTimeout(() => {
        console.log("Timeout executed");
    }, 3000);
    clearTimeout(timeoutId);


    return (
        <>
            <Grid item xs={xs} md={md} >
                <Item>{renderCard(CardInfo)}</Item>
            </Grid>
        </>
    );
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function Cards() {
    async function callsleep(ms) {
        await sleep(ms)
    }

    return (
        <>
            <Grid container spacing={2} sx={GridStyleSheet}>
                {CardsInfo.map(renderCards)}
            </Grid>
        </>
    )
}

export default Cards