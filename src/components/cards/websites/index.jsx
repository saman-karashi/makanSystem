import React from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap';
import cardFirst from '../../../assets/imgs/card-9.jpg';
import cardSecond from '../../../assets/imgs/card-10.jpg';
import cardThird from '../../../assets/imgs/card-11.jpg';
import cardFourth from '../../../assets/imgs/card-12.jpg';

const Websites = () => {
  return (
  <Row className='g-5 px-4 py-5 websites--wrapper' >
    <Col lg={12}>
      <Col lg={12} className='rounded-3 px-5 py-4 d-flex flex-column justify-content-between align-items-start text-white websites-horizontal-card'>
          <p className='websites--text'>
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
      <Row className='mt-3'>
          <Col lg={4} className="mt-lg-0 mt-3">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img variant="top" src={cardSecond}  className="rounded-3"/>
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
        <Col lg={4} className="mt-lg-0 mt-3">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img variant="top" src={cardThird}  className="rounded-3"/>
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
        <Col lg={4} className="mt-lg-0 mt-3">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img variant="top" src={cardFourth} className="rounded-3" />
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
  )
}

export default Websites