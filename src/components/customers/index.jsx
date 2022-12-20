import {useState} from 'react';
import CustomersCard from '../cards/customers';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from "swiper";
import { Container,Image,Card } from 'react-bootstrap';
import firstCustomer from '../../assets/imgs/customer-1.png';
import secondCustomer from '../../assets/imgs/customer-2.png';
import thirdCustomer from '../../assets/imgs/customer-3.png';
import goldStar from '../../assets/icons/gold-star.png';
import {ArrowLeft,ArrowRight} from 'react-bootstrap-icons'; 

const Customers = () => {
const [swipe,setSwipe] = useState(null);
const [isActive,setIsActive] = useState(0);

const buttons = [
    {icon:<ArrowRight />,type:'prev',id:0},
    {icon:<ArrowLeft />,type:'next',id:1}
];


const btnHandler = (e,type,id)=>{
    setIsActive(id)
    if(type == 'next'){
        //Perform next slider handler
        swipe.slideNext();
    }else{
        //Perform prev slider handler
        swipe.slidePrev()
    }
} 

  return (
    <div className=' customers--wrapper mb-6'>
        <Container md="fluid" className='text-center py-1'>
            <h1 className='h2 lh-lg mt-lg-11 mt-8'>
                مورد اعتماد هزاران مشتری <br></br>خوشحال
            </h1>
            <p className='lead'>
            اینها نظرات مشتریان ما هست که هنگام اولین استفاده از محصولات ما با کمال میل
            به ما ملحق شده اند.
            </p>
            <Swiper
                pagination={{clickable:true}}
                navigation={true}
                loop={true}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                observer
                observeParents
                className="mySwiper mt-lg-5"
                onBeforeInit={(swiper)=> setSwipe(swiper) }
                breakpoints={{
                    1200:{
                        slidesPerView:3,
                    },
                    768:{
                        slidesPerView:2
                    }
                }}
                >

                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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

                    </SwiperSlide>
                    
            </Swiper>
            <div className="customers--arrows">
                {
                    buttons.map((btn,idx)=>{
                        return(
                            <button className={`rounded-circle btn fs-3 mx-3 ${isActive === btn.id ? 'btn-outline-primary' : 'btn-primary'}`} onClick={(e) => btnHandler(e,btn.type,btn.id)}  key={idx}>
                                {btn.icon}
                            </button>
                        )
                    })
                }
            </div>
        </Container>
    </div>
  )
}

export default Customers

