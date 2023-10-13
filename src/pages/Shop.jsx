import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useContext, useEffect, useState } from "react";
import { products, discoutProducts } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import Wrapper from "../components/wrapper/Wrapper";
import { DataContainer } from "../App";
import '../pages/shop.css'

const Shop = () => {
    const { addToCart } = useContext(DataContainer);
    const [filterList, setFilterList] = useState(products.filter(item => item.category === "sofa"));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <Banner title="product" productBgImg='https://priceoye.pk/assets/images/home/dk-banner-static.jpg' /> {/* Include the Banner component here */}

            <section className="filter-bar" >
                <Container className="filter-bar-container">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <FilterSelect setFilterList={setFilterList} />
                        </Col>
                        <Col md={8}>
                            <SearchBar setFilterList={setFilterList} />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <ShopList productItems={filterList} addToCart={addToCart} />
                    <ShopList productItems={discoutProducts} addToCart={addToCart} />
                    <ShopList productItems={filterList} addToCart={addToCart} />
                </Container>
                <Wrapper />
            </section>
        </Fragment>
    );
}

export default Shop;
