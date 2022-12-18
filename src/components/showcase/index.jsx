import { Container,Button, Image, } from "react-bootstrap";
import play from '../../assets/icons/play.png';

const Showcase = () => {
  return (
    <section className="bg-primary showcase--wrapper">
        <Container className="h-100 d-flex flex-column justify-content-center align-items-start">
            <div className="d-md-block d-none mt-lg-0  bg-info rounded-5 text-start bg-info text-white py-3 pe-2 ps-5">
              <small style={{padding:"13px 10px"}} className="bg-primary rounded-circle">
                جدید
              </small>
              <small className="me-3">لورم اپیسوم یک متن ساختگی است که..</small>
            </div>
            <h1 className="my-4 text-md-end text-center mx-md-0 mx-auto">
            <span className="text-white">شرکت ماکان </span>
              <span className="text-warning">
                سیستم
              </span> 
            <br></br>
            <span className="text-warning">
              هوشمند 
            </span>
            </h1>
            <p className="text-white showcase--text text-md-end text-center lead">
            شرکت داده پرداز ماکان سیستم دانشمند در راستای اهداف عالیه صنعت برق و انرژی در سال 1388 با موضوع مشاوره و تهیه نرم افزار در حوزه صنعت برق و دیگر صنایع کشور در شهراصفهان تاسیس گردید
            </p>
            <div className="mx-auto mx-md-0 flex-sm-row align-items-center flex-column d-flex mt-4">
              <button className="mb-sm-0 mb-4 btn-warning text-white rounded-2 btn">
                ورود به سامانه
              </button>
              <div className="me-sm-5 d-flex align-items-center ">
                <span style={{width:"37px",height:'37px'}} className="align-items-center d-sm-flex d-none justify-content-center bg-white rounded-circle">
                 <Image src={play} width="10px" height="12px" />
                </span>
                <Button variant="btn" as="a" className="text-white me-2">اطلاعات بیشتر</Button>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Showcase