import React from 'react';
import { Card,Image,Row,Col } from 'react-bootstrap';
import firstCustomer from '../../../assets/imgs/customer-1.png';
import secondCustomer from '../../../assets/imgs/customer-2.png';
import thirdCustomer from '../../../assets/imgs/customer-3.png';
import goldStar from '../../../assets/icons/gold-star.png';

const CustomersCard = () => {
  return (
            <Row className='mt-8'>
                <Col lg={4} md={12}>
                    <Card style={{height:"15em"}} className="my-lg-0 my-5 rounded-3 customers--card border-0 px-3 text-center">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Image src={firstCustomer}/>
                                        <div className="me-3">
                                            <h6 className="mb-0">
                                                علی کریمی
                                            </h6>
                                            <small>
                                                ایران تهران
                                            </small>
                                        </div>
                                    </div>
                                    <div>
                                        <span>
                                            <span className='ms-2'>۴.۵</span>
                                            <Image src={goldStar}/>
                                        </span>
                                    </div>
                                </div>
                                <Card.Text className='text-lg-end mt-3 lh-lg text-center'>
                                هیچ گاه مناسب ترین قیمت به معنی ارزان ترین قیمت نخواهد بود.در آزانس ما مناسب ترین قیمت به این معنی است که بیشترین بهره وری با کمترین قیمت خواهد بود 
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card style={{height:"15em"}} className="my-lg-0 my-5 rounded-3 customers--card border-0 px-3 text-center">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Image src={secondCustomer}/>
                                        <div className="me-3">
                                            <h6 className="mb-0">
                                                زهرا باقری
                                            </h6>
                                            <small>
                                                ایران تهران
                                            </small>
                                        </div>
                                    </div>
                                    <div>
                                        <span>
                                            <span className='ms-2'>۴.۵</span>
                                            <Image src={goldStar}/>
                                        </span>
                                    </div>
                                </div>
                                <Card.Text className='text-lg-end mt-3 lh-lg text-center'>
                                هیچ گاه مناسب ترین قیمت به معنی ارزان ترین قیمت نخواهد بود.در آزانس ما مناسب ترین قیمت به این معنی است که بیشترین بهره وری با کمترین قیمت خواهد بود 
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card style={{height:"15em"}} className="my-lg-0 my-5 rounded-3 customers--card border-0 px-3 text-center">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Image src={thirdCustomer}/>
                                        <div className="me-3">
                                            <h6 className="mb-0">
                                                علی زارع
                                            </h6>
                                            <small>
                                                ایران تهران
                                            </small>
                                        </div>
                                    </div>
                                    <div>
                                        <span>
                                            <span className='ms-2'>۴.۵</span>
                                            <Image src={goldStar}/>
                                        </span>
                                    </div>
                                </div>
                                <Card.Text className='text-lg-end mt-3 lh-lg text-center'>
                                هیچ گاه مناسب ترین قیمت به معنی ارزان ترین قیمت نخواهد بود.در آزانس ما مناسب ترین قیمت به این معنی است که بیشترین بهره وری با کمترین قیمت خواهد بود 
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
  )
}

export default CustomersCard