import { Col, Container, Row } from "react-bootstrap";
import productBg from "../../Images/dk-banner-static.jpeg";
import "./banner.css";
const Banner = ({ title, productBgImg }) => {
    return (
        <div className="image-container">
            <img src={productBgImg ? productBgImg : productBg} alt="Product-bg" />
            <div className={title ? "overlay" : ''}>
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;