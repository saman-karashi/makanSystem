import React from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap';
import cardFirst from '../../../assets/imgs/card-9.jpg';

const Systems = () => {
  return (
  <Row className='g-5 px-5 py-5' >
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

    <Col lg={8} className="p-0 px-md-4">
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
      <Row className='mt-3'>
          <Col lg={6}>
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
        <Col lg={6}>
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
      </Row>
    </Col> 
</Row>
  )
}

export default Systems