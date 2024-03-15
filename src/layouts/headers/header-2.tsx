"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menus from "./component/menus";
import logo from "@/assets/images/logo/logo_04.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";
import logo1 from "@/assets/images/logo/cc_logo.webp";
import logo3 from "@/assets/images/logo/image15.png";
import logo2 from "@/assets/images/logo/cc_logo.svg";
// import '../../../public/assets/css/csds.css'
// import '../../../public/assets/css/style.css'
const HeaderTwo = () => {
  const { sticky } = useSticky();
  return (
    <>
      <header
        className={'theme-main-menu'}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo3}
                    alt="logo"
                    priority
                    height={100}
                    width={180}
                   
                  />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                <li className="d-none d-md-block ms-4">
                    <Link href="/register" className="btn-five">
                      For Brands
                    </Link>
                  </li>
                  <li className="d-none d-md-block ms-4">
                    <Link href="/register" className="btn-five">
                      For Creators
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {/* <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" width="100" priority />
                        </Link>
                      </div>
                    </li> */}

                    {/* <Menus /> */}
                    <li className="d-md-none mt-5">
                      <Link href="/register" className="btn-five w-100">
                        Brand
                      </Link>
                    </li>
                    <li className="d-md-none mt-5">
                      <Link href="/register" className="btn-five w-100">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderTwo;
