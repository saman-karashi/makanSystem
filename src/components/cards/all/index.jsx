import React from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap';
import cardFirst from '../../../assets/imgs/card-1.png'
import cardSecond from '../../../assets/imgs/card-2.png'
import cardThird from '../../../assets/imgs/card-3.png'
import cardFourth from '../../../assets/imgs/card-4.png'

const All = () => {
  return (
    <>
    <Row className='g-5 p-5' >
        <Col md={12} lg={4} className='rounded-3 px-xl-5 py-4 d-flex flex-column justify-content-between align-items-start text-white projects--vertical-card'>
                <p>
                شرکت داده پرداز ماکان سیستم دانشمند در راستای اهداف عالیه صنعت برق و انرژی در سال 1388 با موضوع مشاوره و تهیه نرم افزار در حوزه صنعت برق و دیگر صنایع   
                </p>
                <div>
                    <h3 className='h5'>
                    پروژه سامانه توزیع برق گیلان    
                    </h3>
                    <p>
                    سامانه،سایت
                    </p>
                </div>

        </Col>
        <Col md={12} lg={8} className="p-md-0 px-lg-4">
            <Row className='g-5 g-md-3'>
              <Col md={6} lg={6} className="p-0 p-md-2 py-md-0">
                <Card className="bg-gray-100 border-0 p-2">
                    <Card.Img variant="top" src={cardFirst} />
                        <Card.Body className="p-2">
                            <Card.Title>
                              پروژه سامانه توزیع برق گیلان
                            </Card.Title>
                            <Card.Text>
                                سامانه،سایت
                            </Card.Text>
                        </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={6} className="p-0 p-md-2 py-md-0">
                <Card className="bg-gray-100 border-0 p-2">
                    <Card.Img variant="top" src={cardSecond} />
                        <Card.Body className="p-2">
                            <Card.Title>
                              پروژه سامانه توزیع برق گیلان
                            </Card.Title>
                            <Card.Text>
                                سامانه،سایت
                            </Card.Text>
                        </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={6} className="p-0 p-md-2 py-md-0">
                <Card className="bg-gray-100 border-0 p-2">
                    <Card.Img variant="top" src={cardThird} />
                        <Card.Body className="p-2">
                            <Card.Title>
                              پروژه سامانه توزیع برق گیلان
                            </Card.Title>
                            <Card.Text>
                                سامانه،سایت
                            </Card.Text>
                        </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={6} className="p-0 p-md-2 py-md-0">
                <Card className="bg-gray-100 border-0 p-2">
                    <Card.Img variant="top" src={cardFourth} />
                        <Card.Body className="p-2">
                            <Card.Title>
                              پروژه سامانه توزیع برق گیلان
                            </Card.Title>
                            <Card.Text>
                                سامانه،سایت
                            </Card.Text>
                        </Card.Body>
                </Card>
              </Col>
            </Row>
        </Col>
    </Row>
    <div className='d-flex justify-content-center'>
        <Button variant="primary" className='px-4 py-2'>
          مشاهده بیشتر
        </Button>
      </div>
    </>
    
  )
}

export default All