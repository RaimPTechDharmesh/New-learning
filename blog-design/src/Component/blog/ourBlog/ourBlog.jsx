import React from "react";
import {Container, Typography, Grid, Card, CardContent, CardMedia, Box} from '@mui/material';

function OurBlog() {
    return (
        <>
            <div>
                <div>
                    <CardMedia
                        component="img"
                        image="https://s7ap1.scene7.com/is/image/TCSCOMprod/chatbot-1?wid=960&hei=378&dpr=off"
                        alt="Blog post image"
                    />
                </div>
            </div>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{mt: 4, mb: 3}}>
                    IT Service Blog
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://media.dev.to/cdn-cgi/image/width=1000,height=750,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F5mnhwopdy5js53gvp9dj.jpg"
                                alt="Blog post image"
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Tech troubleshooting tips
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Got a pesky error message? Can't seem to connect to the internet? We'll provide
                                    easy-to-follow guides to get you back on track. </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://picsum.photos/id/238/800/600"
                                alt="Blog post image"
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Security essentials
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Staying safe online is crucial. We'll discuss the latest cybersecurity threats and
                                    offer practical steps to protect your data and devices. </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <div style={{backgroundColor: 'black', padding: '0px'}}>
                <Container maxWidth="lg" sx={{padding: '72px 0 46px'}}>
                    <Typography variant="h2" sx={{
                        fontFamily: 'Houschka-medium',
                        fontSize: '2.5rem',
                        lineHeight: '3rem',
                        marginBottom: '1.5rem',
                        color: "whitesmoke"
                    }}>
                        News and Events
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card sx={{backgroundColor: 'black', maxWidth: '340px', margin: '0 auto'}}>
                                <CardMedia
                                    component="img"
                                    image="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/services/cognitive-business-operations/value-realization.jpeg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                                    alt=""
                                    sx={{width: '100%', height: '210px'}}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="whitesmoke" sx={{
                                        fontSize: '1.5rem',
                                        lineHeight: '2.1rem',
                                        fontFamily: 'Basis-regular',
                                        maxWidth: '90%',
                                        pt: "10px"
                                    }}>
                                        86% of Executives have already deployed Artificial Intelligence to enhance
                                        revenue, reveals TCS Global AI Study
                                    </Typography>
                                    <Typography color="#9e9fa3" sx={{fontSize: '1rem', pt: "20px"}}>28 May
                                        2024</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card sx={{backgroundColor: 'black', maxWidth: '340px', margin: '0 auto'}}>
                                <CardMedia
                                    component="img"
                                    image="https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/Corporate/healthcare-research-diamond-microchip-imager-web.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                                    alt=""
                                    sx={{width: '100%', height: '210px'}}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="whitesmoke" sx={{
                                        fontSize: '1.5rem',
                                        lineHeight: '2.1rem',
                                        fontFamily: 'Basis-regular',
                                        maxWidth: '90%',
                                        pt: "10px"
                                    }}>
                                        TCS & IIT-Bombay to Build India’s First Quantum Diamond Microchip Imager
                                    </Typography>
                                    <Typography color="#9e9fa3" sx={{fontSize: '1rem', pt: "20px"}}>16 May
                                        2024</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card sx={{backgroundColor: 'black', maxWidth: '340px', margin: '0 auto'}}>
                                <CardMedia
                                    component="img"
                                    image="https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/news/analyst-reports/banking-operations-leader-everest-group-Card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                                    alt=""
                                    sx={{width: '100%', height: '210px'}}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="whitesmoke" sx={{
                                        fontSize: '1.5rem',
                                        lineHeight: '2.1rem',
                                        fontFamily: 'Basis-regular',
                                        maxWidth: '90%',
                                        pt: "10px"
                                    }}>
                                        Annual Secretarial Compliance Report for FY March 31, 2024
                                    </Typography>
                                    <Typography color="#9e9fa3" sx={{fontSize: '1rem', pt: "20px"}}>24 May
                                        2024</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Box sx={{ backgroundColor: 'white' }}>
                <section style={{
                        padding: '4rem 0rem',
                        margin: '0 auto',
                        maxWidth: '1200px',
                    }}>
                    <div style={{
                            width: ['100%', '500px'],
                            maxWidth: '425px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <Typography variant="body1" color="black" sx={{ fontFamily: 'Basis-bold' }}>
                            BELIEF IN ACTION
                        </Typography>
                        <Typography variant="h5" color="black" sx={{ fontFamily: 'Houschka-medium', marginBottom: '2rem' }}>
                            TCS Summit Europe 2023
                        </Typography>
                        <Typography variant="body2" color="black" sx={{ fontFamily: 'Basis-regular', marginBottom: '2rem' }}>
                            Accelerating the sustainable enterprise During the summit, leaders will discuss how a culture of innovation and the use of intelligent technologies can accelerate the next stage of sustainable growth.
                        </Typography>
                    </div>
                    <div style={{ width: ['100%', '478px'], maxWidth: '478px' }}>
                        <CardMedia
                            component="img"
                            href="https://www.youtube.com/watch?v=VIDEO_ID"
                            image="https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/news/analyst-reports/banking-operations-leader-everest-group-Card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.jpeg"
                            alt=""
                            sx={{ width: '100%', height: '279px', borderRadius: '10px' }}
                        />
                    </div>
                </section>
            </Box>
        </>
    );
}

export default OurBlog;