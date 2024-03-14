"use client";
import React from "react";
import { gsap } from "gsap";
import "./style.css";

import { useEffect, useRef, useLayoutEffect } from "react";
function Fancybanner() {
  const root = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.from(".fruit-image", { y: "-100vh", delay: 0.5 });
      gsap.to(".fruit-image img", {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        zIndex: 22,
        duration: 2,
        ease: "none",
        yoyo: true,
        repeat: -1,
      });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  const imageRef = useRef();
  return (
    <>
      <header>
        <h2 className="logo">Saleh</h2>
      </header>

      <main>
        <div className="text">
          <h1 className="h1">Saleh</h1>

          <div className="cane-image ">
            <img src="https://www.yudiz.com/codepen/fruity/cane.svg" alt="" />
          </div>
        </div>

        <div class="section-container-main" ref={root}>
          <div class="section-container">
            <section class="section" id="section1">
              <div class="fruit-images" ref={imageRef}>
                <div class="image-one fruit-image">
                  <img
                    src="https://www.yudiz.com/codepen/fruity/pear-one.png"
                    alt="pear-image"
                    ref={imageRef}
                  />
                </div>
                <div class="image-two fruit-image">
                  <img
                    src="https://www.yudiz.com/codepen/fruity/pear-two.png"
                    alt="pear-image"
                    ref={imageRef}
                  />
                </div>
                <div class="image-three fruit-image">
                  <img
                    src="https://www.yudiz.com/codepen/fruity/pear-three.png"
                    alt="pear-image"
                    ref={imageRef}
                  />
                </div>
                <div class="image-four fruit-image">
                  <img
                    src="https://www.yudiz.com/codepen/fruity/pear-four.png"
                    alt="pear-image"
                    ref={imageRef}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Fancybanner;
