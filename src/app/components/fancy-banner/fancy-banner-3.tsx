"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import icon_1 from '@/assets/images/icon/icon_37.svg';
import icon_2 from '@/assets/images/icon/icon_38.svg';
import icon_3 from '@/assets/images/icon/icon_39.svg';
import VideoPopup from '../common/video-popup';

// content data
const content_data: {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}[] = [
    { title: 'It’s take 2 minutes to open an account.', subtitle: 'Open Acount', icon: icon_1 },
    { title: 'Find talents or search your desire work.', subtitle: 'Apply job or hire', icon: icon_2 },
    { title: 'Get work done quickly with jobi gatweay.', subtitle: 'Payment Method', icon: icon_3 },
  ]

const FancyBannerThree = ({ style_2 = false }: { style_2?: boolean }) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      {!style_2 && <section className="fancy-banner-three mt-75 lg-mt-50">
        <div className="container">
          <div className="bg-wrapper position-relative wow fadeInUp">
            <div className="row">
              <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
                <div className="text-wrapper wow fadeInRight">
                  <a className="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center" onClick={() => setIsVideoOpen(true)} style={{ cursor: 'pointer' }}>
                    <i className="bi bi-play-fill"></i>
                  </a>
                  <div className="title-one mt-35 lg-mt-30 mb-30 lg-mb-20">
                    <h2 className="fw-600 text-white">how it
                   <span style={{ color: '#00BF58' }}>works.</span></h2>
                  </div>
                  <p className="text-white">Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
                </div>
              </div>
            </div>

            <div className="bottom-content position-relative">
              <div className="row gx-xxl-5 justify-content-between">
               
              </div>
            </div>
          </div>
        </div>
      </section>}

      {style_2 && <section className="fancy-banner-three mt-150 lg-mt-100">
        <div className="bg-wrapper pt-85 lg-pt-50 pb-80 lg-pb-50 position-relative wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
                <div className="text-wrapper p0 mb-50 md-mb-20 wow fadeInRight">
                  <a className="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center" onClick={() => setIsVideoOpen(true)} style={{ cursor: 'pointer' }}>
                    <i className="bi bi-play-fill"></i>
                  </a>
                  <div className="title-one mt-25 mb-25 lg-mb-20">
                  <h2 className="fw-600 text-white">how it<br/>
                   <span>works.</span></h2></div>
                  <p className="text-white text-md">We take the hassle out of creator marketing. </p><br/>
                  <p className="text-white text-md">With a simple monthly subscription, here’s how we bridge brands and agencies with creators to establish genuine relationships with customers.</p>
                </div>
              </div>
            </div>

        
          </div>
        </div>
      </section>}

      {/* video modal start */}
      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'-6ZbrfSRWKc'} />
      {/* video modal end */}
    </>
  );
};

export default FancyBannerThree;