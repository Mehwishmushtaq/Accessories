import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={12}>
          <Carousel interval={3000} controls={false} prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} nextIcon={<FontAwesomeIcon icon={faChevronRight} />}>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                  <button className="btn-primary">SHOP NOW</button>
                </Col>
                <Col md={6}>
                  <img src={cover} alt="#" />
                </Col>
              </Row>
            </Carousel.Item>
            {/* Add more Carousel.Item components for additional slides */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
