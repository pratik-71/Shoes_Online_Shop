import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Cancelled_product = () => {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const get_cancelled_product = async () => {
        const jwttoken = localStorage.getItem("Auth-Token");
        try {
            const response = await axios.get(
                "http://localhost:3001/products/cancelled_orders",
                {
                    headers: {
                        "X-Auth-Token": jwttoken,
                    },
                }
            );
            if (response && response.data) {
                console.log(response.data);
                setOrder(response.data);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        get_cancelled_product();
    }, []);

    return (
        <div>
            <Container>
                {isLoading ? (
                    <div>Loading...</div>
                ) : order && Array.isArray(order) && order.length > 0 ? (
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                        {order.map((shoe, index) => (
                            <div key={index} className="return_order_card_wrapper mx-4 my-4">
                                <Row className="return_order_card p-2">
                                    <h6 className="text-center">
                                        Delivered on {shoe.delievery_date?.substring(0, 10)}
                                    </h6>
                                    <hr />
                                    <Row>
                                        <Col md={6} className="d-flex justify-content-center align-items-center">
                                            <img
                                                src={shoe.imageURL}
                                                className="img-fluid"
                                                style={{ height: "25vh", width: "250px" }}
                                                alt={shoe.title}
                                            />
                                        </Col>
                                        <Col md={6} className="text-center">
                                            <h5>{shoe.title}</h5>
                                            <h6>Rs. {shoe.price}</h6>
                                            <h6>Quantity: {shoe.quantity}</h6>
                                            <div className="d-flex flex-column Return_order_btn">
                                                <button className="px-1 py-1 rounded my-3 bg-primary border-0 text-white">
                                                    View Product
                                                </button>
                                                <button className="px-1 py-1 rounded bg-warning border-0 my-1">
                                                    Buy Again
                                                </button>
                                                <button className="px-1 py-1 rounded bg-danger border-0">
                                                    Return Product
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h5 className='text-center my-5'>No cancelled product yet</h5>
                )}
            </Container>
        </div>
    );
};

export default Cancelled_product;
