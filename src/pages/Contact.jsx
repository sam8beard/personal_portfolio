import './Contact.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact() { 
    return ( 
        <div className="contact-parent"> 
            <Container fluid className="contact-container"> 
                <Row> 
                    <Col> 
                    <h1> Coming soon!</h1>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
} 
export default Contact; 