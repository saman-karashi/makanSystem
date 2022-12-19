import React from 'react';
import {Container,Button,Image,Row,Col} from 'react-bootstrap';
import manOnSofa from '../../assets/imgs/man-on-sofa.png';
import curvyArrow from '../../assets/icons/curvy-arrow.png'
import bulb from '../../assets/icons/bulb.png'

const Order = () => {
  return (
    <div className="order--wrapper p-5">
    <Container className='h-100'>
        <Row className='h-100'>
            <Col md={12} lg={6} className="order-lg-1 text-lg-end text-center order-2">
                <p className='lead mb-4 mt-5'>
                اولین سفارش پروژه تان را ثبت کنید
                </p>
                <h1>
                برای ثبت اولین پروژه تان کلیک کنید.
                </h1>
                <Button variant='orange-600' className='mb-lg-0 mt-lg-7 mt-5 px-lg-6 px-5 fs-5 text-white py-3 rounded-4'>
                    ثبت سفارش
                </Button>
            </Col>
            <Col md={12} lg={6} className="position-relative order-lg-2 order-1 order-bg-wrapper">
                <Image src={manOnSofa} className="order-manOnSofa container-fluid" />
                <Image src={curvyArrow} className="d-lg-block d-none order-curvyArrow position-absolute"  />
                <Image src={bulb} className="d-lg-block d-none order-bulb position-absolute"  />
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Order