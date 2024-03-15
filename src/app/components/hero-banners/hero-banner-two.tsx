"use client";
import React from "react";
import Image from "next/image";
// internal
import shape_1 from "@/assets/images/shape/shape_15.svg";
import shape_2 from "@/assets/images/shape/shape_16.svg";
import shape_3 from "@/assets/images/shape/shape_17.svg";
import shape_4 from "@/assets/images/shape/shape_18.svg";
import shape_5 from "@/assets/images/shape/shape_19.svg";
import shape_6 from "@/assets/images/shape/shape_20.svg";
import screen_1 from "@/assets/images/assets/screen_04.png";
import screen_2 from "@/assets/images/assets/screen_05.png";
import screen_3 from "@/assets/images/assets/screen_06.png";
import main_img from "@/assets/images/assets/img_10.png";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeroBannerTwo = () => {
  const { handleSubmit, setSearchText } = useSearchFormSubmit();
  // handleSearchInput
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="hero-banner-two position-relative">
      <div className="container">
        <div className="position-relative pt-80 xl-pt-50 lg-pt-50 pb-80 lg-pb-40">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                where
              </h1>
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              brands &
              </h1>
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              creators
              </h1>
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              co-create.
              </h1>
              <p
                className="text-md mt-35 mb-50 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
              Cult Creative is the all-in-one portal for creators and brands to seamlessly work, collaborate and elevate.
              </p>
              <p
                className="text-md mt-35 mb-50 lg-mb-30 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
               With our 13,000 talent pool across Southeast Asia, we help transform ideas into captivating, quality content for brands.
              </p>
              
            </div>
          </div>
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div
                  className="job-search-two position-relative me-xxl-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
  
                </div>
                {/* /.job-search-two */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-box">
        <Image
          src={main_img}
          alt="main-img"
          className="lazy-img shape_01"
          // style={{ height: "auto" }}
        />
              <Image
          src={main_img}
          alt="main-img"
          className="lazy-img shape_01"
          // style={{ height: "auto" }}
        />
     
   
      </div>
      {/* /.img-box */}
      <div className="rating-box position-relative">
        <div className="d-sm-flex justify-content-center">
         
            <div className="d-flex align-items-center">
       
              <div>
              <button className="btn-seven">Get Started</button>
                {/* <div className="text-lg fw-500 text-dark">18k+</div>
                <span>Individual Freelancer</span> */}
              </div>
            </div>
          </div>
       
        </div>
    </div>
  );
};

export default HeroBannerTwo;
