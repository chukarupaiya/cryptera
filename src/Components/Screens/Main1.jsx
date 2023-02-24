import React, { useEffect, useRef } from "react";
import Image1 from "./assets/layer6.png";
import Image2 from "./assets/layer5.png";
import Image3 from "./assets/layer7.png";
import Image4 from "./assets/layer8.webp";
import Image5 from "./assets/layer9.png";
import Image6 from "./assets/layer11.png";
import "../../App.css";
import Parallax from "parallax-js";
function Main({ movetohomepage }) {
  const sectionref = useRef(null);
  const greenref = useRef(null);
  const Homeref = useRef(null);
  let h = 10;
  useEffect(() => {
    const parallaxinstance = new Parallax(sectionref.current);
    parallaxinstance.enable();
    return () => parallaxinstance.disable();
  }, []);
  const wheelhandler = (event) => {
   // console.log("wheel");
   // console.log(event.deltaY);
    if (event.deltaY < 0) {
      h = 0;
      greenref.current.style.height = "0px";
    } else {
      if (
        Homeref.current.offsetHeight + Homeref.current.scrollTop >=
        Homeref.current.scrollHeight
      ) {
        h += 3;
       // console.log(h);
        greenref.current.style.height = h + "px";
        if (h > 100) {
          greenref.current.style.height = "0px";
          movetohomepage();
        }
      }
    }
  };

  // function show() {
  //   const temp = document.getElementById("main_cry");
  //   temp.style.transform = `translateX(0px)`;
  //   temp.style.color = `black`;
  // }

  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("speed");

        const x = (window.innerWidth - e.pageX * speed) / 1000;
        const y = (window.innerHeight - e.pageY * speed) / 1000;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  }, []);

  return (
    <div
      onWheel={wheelhandler}
      ref={Homeref}
      style={{
        margin: "0",
        boxSizing: "border-box",
        padding: "0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <section ref={sectionref}>
        <div className="outer-layer">
          <div className="layer1 layer" speed={"40"}>
            <img src={Image1} />
          </div>
          <div className="layer2">
            <img src={Image2} alt="" />
          </div>
          <div className="layer3" speed={"8"}>
            <img src={Image3} alt="" />
          </div>
          <div className="layer4 floating" speed={"8"}>
            <img src={Image4} alt="" />
          </div>
          <div className="layer5 floating" speed={"8"}>
            <img src={Image5} alt="" />
          </div>
          <div className="layer6 floating" speed={"8"}>
            <img src={Image6} alt="" />
          </div>
          <div className="divdiv">
            <p id="main_cry">CRYPTERA</p>
            <p id="main_cry2">Department of CSE</p>
            <p id="main_cry3">Coimbatore Institute Of Technology</p>
          </div>
        </div>
      </section>
      <div className="scroll-indicator">
        <div></div>
        <div>
          <a
            class="ca3-scroll-down-link ca3-scroll-down-arrow"
            data-ca3_iconfont="ETmodules"
            data-ca3_icon=""
            style={{ fontSize: "20px", margin: "auto", textAlign: "center" }}
          >
            Scroll
          </a>
        </div>
      </div>
      <div className="add-green violet-gradient " ref={greenref} />
    </div>
  );
}

export default Main;
