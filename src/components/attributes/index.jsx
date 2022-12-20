import React from 'react';
import { Container,Row,Col,Card, Image } from 'react-bootstrap';
import checked from '../../assets/icons/checked.png'
import percentage from '../../assets/icons/percentage.png'
import telephone from '../../assets/icons/telephone.png'

const Attributes = () => {
  return (
    <Container className='mt-6 text-center'>
        <h1 className='mb-lg-8 mb-5'>
            ویژگی های ما
        </h1>
        <Row>
            <Col lg={4} md={6}>
                <Card style={{height:"18em"}} className="my-lg-0 my-5 rounded-5 bg-blue-400 border-0 text-center">
                    <div className='bg-blue-600 rounded-circle d-flex align-items-center justify-content-center mx-auto p-3' style={{marginTop:"-2em"}}>
                        <Image src={percentage} width={"40px"}/>
                    </div>
                        <Card.Body>
                            <Card.Title className="my-xl-3 my-md-2 my-4">
                            مناسب ترین قیمت ها  
                            </Card.Title>
                            <Card.Text className='text-center px-lg-4 px-4'>
                            هیچ گاه مناسب ترین قیمت به معنی ارزان ترین قیمت نخواهد بود.در آزانس ما مناسب ترین قیمت به این معنی است که بیشترین بهره وری با کمترین قیمت خواهد بود 
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={6}>
                <Card style={{height:"18em"}} className="my-lg-0 my-5 rounded-5 bg-orange-400 border-0 text-center">
                    <div className='bg-orange-600 rounded-circle d-flex align-items-center justify-content-center mx-auto p-3' style={{marginTop:"-2em"}}>
                        <Image src={telephone} width={"40px"}/>
                    </div>
                        <Card.Body>
                            <Card.Title className="my-xl-3 my-md-2 my-4">
                            پشتیبانی از شما
                            </Card.Title>
                            <Card.Text className='text-center px-lg-4 px-4'>
                            تیم پشتیبانی ما در تمام ساعات شبانه روز آمادهپاسخگویی به سوالات شما هستند. اگر به مشکلی برخوردید کافیست با تیم پشتیانی ما تماس بگیرید تا مشکلتان در سریع ترین زمان حل شود
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={6} className="mx-md-auto" >
                <Card style={{height:"18em"}} className="my-lg-0 my-5 rounded-5 bg-purple-400 border-0 text-center">
                    <div className='bg-purple-600 rounded-circle d-flex align-items-center justify-content-center mx-auto p-3' style={{marginTop:"-2em"}}>
                        <Image src={checked} width={"40px"}/>
                    </div>
                        <Card.Body>
                            <Card.Title className="my-xl-3 my-md-2 my-4">
                            تکنولوژی روز
                            </Card.Title>
                            <Card.Text className='text-center px-lg-4 px-4'>
                            تیم پشتیبانی ما در تمام ساعات شبانه روز آمادهپاسخگویی به سوالات شما هستند. اگر به مشکلی برخوردید کافیست با تیم پشتیانی ما تماس بگیرید تا مشکلتان در سریع ترین زمان حل شود
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
  )
}

export default Attributes