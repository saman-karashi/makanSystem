import React from 'react';
import { Container, Navbar,Nav,Form, Image} from 'react-bootstrap';
import logo from '../../assets/logo/logo.png';
import search from '../../assets/icons/search.png'

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg" className='fixed-top'>
        <Container className='py-lg-4'>
            <Navbar.Brand className='ms-4'>
                <Image src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
          <Nav
            className='ms-auto'
            navbarScroll
          >
            <Nav.Link className='mx-lg-2 mt-2 mt-lg-0' href="#products">محصولات</Nav.Link>
            <Nav.Link href="#team_work">تیم کاری</Nav.Link>
            <Nav.Link className='mx-lg-2' href="#qualification">تایید صلاحیت</Nav.Link>
            <Nav.Link href="#oppurtunities">فرصت های شغلی</Nav.Link>
            <Nav.Link className='mx-lg-2' href="#contact_us">تماس باما</Nav.Link>
            <Nav.Link className='mb-2 mb-lg-0' href="#about_us">درباره ما</Nav.Link>
          </Nav>
           <Form className="d-none d-lg-flex position-relative nav--form">
              <Form.Control
                type="search"
                className='nav--input'
                placeholder="جستجو"
              />
             <Image src={search} className='search-img' width={"24px"} height={"24px"}/>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menu