import React from 'react'
import { Container,Row,Col,Image,Button } from 'react-bootstrap'
import footerLogo from '../../assets/logo/footer-logo.png';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import Map from '../map';


const Footer = () => {
  return (
    <div className='bg-primary p-lg-7 py-5 text-white'>
        <Container>
        <Row>
            <Col lg={3} md={12}>
                <h6>
                    <span className='align-bottom'>Makan System</span>
                    <Image src={footerLogo} className="me-2" />
                </h6>
                <p className='my-3'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <div >
                    <Button as="a" blank="_blank" href="https://instagram.com">
                        <Image src={instagram}/>
                    </Button>
                    <Button as="a" blank="_blank" href="https://twitter.com">
                        <Image src={twitter} />
                    </Button>
                    <Button as="a" blank="_blank" href="https://facebook.com">
                        <Image src={facebook}/>
                    </Button>
                </div>
            </Col>

            <Col className="mt-lg-0 mt-3" lg={2} md={12}>
                <h6>میانبر</h6>
                <div className='border-bottom border-white w-50'></div>
                <ul className='p-0'>
                    <li className="my-3"><a href="#somewhere">
                        صفحه اصلی
                        </a>
                    </li>
                    <li className="my-3"><a href="#somewhere">
                        درباره ما
                        </a>
                    </li>
                    <li className="my-3"><a href="#somewhere">
                        تماس با ما
                        </a>
                    </li>
                    <li className="my-3"><a href="#somewhere">
                        درباره ما
                        </a>
                    </li>
                </ul>

            </Col>

            <Col className="mt-lg-0 mt-3" lg={2} md={12}>
                <h6>میانبر</h6>
                <div className='border-bottom border-white w-50'></div>
                <ul className='p-0'>
                    <li className="my-3"><a href="#somewhere">
                        صفحه اصلی
                        </a>
                    </li>
                    <li className="my-3"><a href="#somewhere">
                        درباره ما
                        </a>
                    </li>
                    <li className="my-3"><a href="#somewhere">
                        تماس با ما
                        </a>
                        </li>
                    <li className="my-3"><a href="#somewhere">
                        درباره ما
                        </a>
                    </li>
                </ul>

            </Col>


            <Col lg={5} md={12}>
                <Map />
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer