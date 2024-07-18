import React from 'react'
import './Home.css'
import profPic from '../assets/wedding_pic.jpg'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import githubLogo from '../assets/github_logo.png'
import linkedinLogo from '../assets/linkedin_logo.png'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/react.svg';
import CodeHubPhoto from '../assets/codehub.jpg';
import TheBoys from '../assets/the_boys.jpg';
import GlobaLink from '../assets/globalink.jpg';
import CV from '../assets/cv.png';
// import Link from 'react-router-dom';

function Home() { 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return ( 
        <div className="home-parent"> 
                {/* <div className="home-intro-group"> 
                    <div> 
                        
                        <Image className="prof-pic" src={profPic} rounded />
                    </div>
                </div>

                <div className="home-photo-group"> 
                    
                </div> */}
                <Container fluid>
                    <Row className="container-row-1">
                        <Col className="container-col-1">
                            <div className="greeting"> 
                                <h1 className="greeting">Hi! I'm Sammy <br/> </h1>
                                <h4 className="description"> I'm a 4th year Computer Science major <br/> at the University of Georgia. <br/>
                                    <br/> I'm seeking fulltime roles in software engineering, data analytics, and other adjacent development positions. Feel free to reach out!<br/> <br/>Go Dawgs! </h4>
                                <div className="link-group"> 
                                    <a href="https://github.com/sam8beard" target="_blank"> 
                                        <img className="github-logo"src={githubLogo}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sammy-beard-0a2980194/" target="_blank"> 
                                        <img className="linkedin-logo"src={linkedinLogo}/>
                                    </a>
                                    <a href="/SAMMY_BEARD_RESUME.pdf" target="_blank" download>
                                        <img className="cv-logo" src={CV} alt='cv logo' />
                                    </a>
                                    

                                    
                                    {/* <img className="github-logo"src={githubLogo}
                                        <a/>
                                    />
                                    <img className="linkedin-logo"src={linkedinLogo}/> */}
                                </div> 
                                
                                    <a/> 
                               
                            </div>
                            <div> 
                                
                            </div>
                        </Col>
                        <Col>
                            <Image className="prof-pic" src={profPic} roundedCircle />
                        </Col>
                    </Row>
                    <Row className="container-row-3"> 
                        <div> 
                            <h1> Highlights :D </h1>
                        </div>
                    </Row>
                    <Row className="container-row-3"> 
                        <Col>
                            
                            <Carousel>
                                <Carousel.Item className="codehub-photo-container">
                                     
                                    <img className="carousel-photo" src={CodeHubPhoto}/>
                                    
                                    
                                    <Carousel.Caption>
                                    {/* <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    
                                    <img className="carousel-photo" src={GlobaLink}/>
                                    <Carousel.Caption>
                                    {/* <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="carousel-photo" src={TheBoys}/>
                                    <Carousel.Caption>
                                    {/* <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row className="container-row"> 
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                
        </div>
    )
}

export default Home