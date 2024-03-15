"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
// internal 
import user_1 from '@/assets/images/assets/img_14.jpg';
import user_2 from '@/assets/images/assets/img_15.jpg';
import shape from '@/assets/images/shape/shape_26.svg';
import shape_2 from '@/assets/images/shape/shape_27.svg';

// review data 
const review_data: {
  id: number;
  title: string;
  rating: number;
  desc: string;
  user: StaticImageData;
  name: string;
  location: string;
}[] = [
    {
      id: 1,
      title: 'Impressive',
      rating: 4.8,
      desc: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
      user: user_1,
      name: 'James Stephens',
      location: 'Sydney'
    },
    {
      id: 2,
      title: 'Nice work!',
      rating: 4.7,
      desc: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
      user: user_2,
      name: 'James Stephens',
      location: 'Sydney'
    },
    {
      id: 3,
      title: 'Impressive',
      rating: 4.5,
      desc: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
      user: user_1,
      name: 'James Stephens',
      location: 'Sydney'
    },
    {
      id: 4,
      title: 'Nice work!',
      rating: 4.2,
      desc: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
      user: user_2,
      name: 'James Stephens',
      location: 'Sydney'
    },
  ]

// slider setting 
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

const FeedbackTwo = () => {
  return (
    <section className="feedback-section-two position-relative pt-65 lg-pt-20 mt-180 xl-mt-150 md-mt-30">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-4">
            <div className="title-one mt-50 wow fadeInUp" data-wow-delay="0.3s">
             
              <h1 className="fw-600" style={{color:"white"}}>hear from our users.</h1>
            </div>
            
          </div>

          <div className="col-lg-8 ms-auto">
            <div className="slider-wrapper ms-lg">
              <div className="row feedback-slider-two">
                <Slider {...slider_setting}>
                  {review_data.map(r => (
                    <div key={r.id} className="item m-0">
                      <div className="feedback-block-two">
                        
                      
                        <blockquote className="mt-50 lg-mt-50 mb-50 lg-mb-50 text-lg ">{r.desc}</blockquote>
                        <div className="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20">
                          <div className="d-flex align-items-center">
                            
                            <div className="ms-3">
                              <div className="name fw-500 text-light">{r.name}</div>
                             
                            </div>
                          </div>
                          <Image src={shape} alt="shape" className="quote-icon" />
                        </div>
                      </div>

                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape_2} alt="shape_2" className="lazy-img shapes shape_01" />
    </section>
  );
};

export default FeedbackTwo;