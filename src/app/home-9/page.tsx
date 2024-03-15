import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-2";
import HeroBannerTwo from "../components/hero-banners/hero-banner-two";
import HowItWorksTwo from "../components/how-it-works/how-it-works-2";
import FeatureThree from "../components/features/feature-three";
import CategorySectionTwo from "../components/category/category-section-2";
import FeatureFour from "../components/features/feature-four";
import FeedbackTwo from "../components/feedBacks/feedback-two";
import BlogTwo from "../components/blogs/blog-two";
import JobPortalIntroTwo from "../components/job-portal-intro/job-portal-intro-2";
import ExpertsOne from "../components/experts/experts-one";
import FooterTwo from "@/layouts/footers/footer-2";
import PartnersSlider from "../components/partners/partners-slider";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-3";
import FancyBanner from "../components/fancy-banner/fancy-banner";

export const metadata: Metadata = {
  title: "Home two",
};

const HomeNine = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}

        {/* hero banner start */}

        <HeroBannerTwo />

        <div className="container">
          <div className="partner-logos pt-120 lg-pt-80 pb-80 lg-pb-40">
            <div className="title fw-500 text-dark text-uppercase text-start mb-65 lg-mb-30">
              {" "}
              <span
                style={{
                  color: "#1340FF",
                  fontSize: "20px",
                }}
              >
                {" "}
                as seen on
              </span>
            </div>
            <PartnersSlider />
          </div>
        </div>

        <FancyBannerThree style_2={true} />

        <div className="container">
          <div className="partner-logos pt-120 lg-pt-80 pb-80 lg-pb-40">
            <div className="title fw-500 text-dark text-uppercase text-start mb-65 lg-mb-30">
              {" "}
              Trusted by{" "}
              <span
                style={{
                  color: "#1340FF",
                }}
              >
                900+
              </span>{" "}
              companies
            </div>

            <PartnersSlider />
          </div>
        </div>
        <FancyBanner />

        <ExpertsOne />

        <FeedbackTwo />
        {/* footer start */}
        <FooterTwo />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default HomeNine;
