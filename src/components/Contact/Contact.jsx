import React from 'react';
import './contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import Wrapper from '../wrapper/Wrapper';

const Contact = () => {

   return (
      <>
         <Container className="contact-form-container">
            <Row>
               <Col md='5'>
                  <div className="container">
                     <h2>Wants To Reach Us</h2>
                     <form action='/' method="POST">
                        <Row gap='2'>
                           <label className='form-label' htmlFor="name">Full Name</label>
                           <input className='form-input' type="text" name="name" id="name" placeholder='Enter Your Name Here' />

                           <label className='form-label' htmlFor="email">Your Email</label>
                           <input className='form-input' type="text" name="email" id="email" placeholder='Enter Your Email Here' />

                           <label className='form-label' htmlFor="number">Your Number</label>
                           <input className='form-input' type="text" name="number" id="number" placeholder='Enter Your Number Here' />

                           <label className='form-label' htmlFor="textarea">Your Precious Message for Us <span>(optional)</span></label>
                           <textarea className='form-input' name="message" colspan='3' id="message" placeholder='Enter Your Message Here' />

                           <button type="submit" className='btn-primary'>Submit Your Proposal</button>
                        </Row>
                     </form>
                  </div>
               </Col>
               <Col md='7' className='map'>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
                     allowfullscreen />
               </Col>
            </Row>
         </Container >
         <Wrapper />
      </>
   );
}


export default Contact;
