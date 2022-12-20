import React from 'react';
import {Row,Col,Card,Button, Image} from 'react-bootstrap';
import cardFirst from '../../../assets/imgs/card-5.jpg'
import cardSecond from '../../../assets/imgs/card-6.jpg'
import cardThird from '../../../assets/imgs/card-7.jpg'
import cardFourth from '../../../assets/imgs/card-8.jpg'

const Applications = () => {
  return (
      <Row className='g-5 p-5'>
          <Col md={6} xl={4} className="p-0 p-md-2 py-md-0">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img src={cardFirst} />
                    <Card.Body className="p-3">
                        <Card.Title>
                          پروژه سامانه توزیع برق گیلان
                        </Card.Title>
                        <Card.Text>
                            سامانه،سایت
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4} className="p-0 p-md-2 py-md-0">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img src={cardSecond} />
                    <Card.Body className="p-3">
                        <Card.Title>
                          پروژه سامانه توزیع برق گیلان
                        </Card.Title>
                        <Card.Text>
                            سامانه،سایت
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4} className="p-0 p-md-2 py-md-0">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img src={cardThird} />
                    <Card.Body className="p-3">
                        <Card.Title>
                          پروژه سامانه توزیع برق گیلان
                        </Card.Title>
                        <Card.Text>
                            سامانه،سایت
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4} className="p-0 p-md-2 py-md-0">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img src={cardFourth} />
                    <Card.Body className="p-3">
                        <Card.Title>
                          پروژه سامانه توزیع برق گیلان
                        </Card.Title>
                        <Card.Text>
                            سامانه،سایت
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4} className="p-0 p-md-2 py-md-0">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img src={cardThird} />
                    <Card.Body className="p-3">
                        <Card.Title>
                          پروژه سامانه توزیع برق گیلان
                        </Card.Title>
                        <Card.Text>
                            سامانه،سایت
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4} className="p-0 p-md-2 py-md-0">
            <Card className="bg-gray-100 border-0 p-2">
                <Card.Img src={cardFourth} />
                    <Card.Body className="p-3">
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
  )
}

export default Applications