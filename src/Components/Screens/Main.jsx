import React, { useEffect, useRef } from "react";
import Image1 from "./assets/layer6.png";
import Image2 from "./assets/layer5.png";



import Parallax from "parallax-js";
function Main({ movetohomepage }) {

  useEffect(()=>{

    document.addEventListener("mousemove",parallax);

    function parallax(e){

      this.querySelectorAll(".layer").forEach(layer=> {
  
          const x=(window.innerWidth- e.pageX*100)/1000;
          const y=(window.innerHeight- e.pageY*100)/1000;

          layer.style.transform=`translateX(${x}px) translateY(${y}px)`;
      });
    }
  },[]);
  
  return (
    <div>
      <div className="outer-layer">
        <div className="layer1 layer">
          <img src={Image1} />
        </div>
        <div className="layer2">
          <img src={Image2} alt="" />
        </div>
        
      </div>
      <div className="scroll-indicator">
        <div></div>
        {/* <div>
          <a
            class="ca3-scroll-down-link ca3-scroll-down-arrow"
            data-ca3_iconfont="ETmodules"
            data-ca3_icon=""
            style={{ fontSize: "90px" }}
          >
            Scroll
          </a>
        </div> */}
      </div>
      {/* <div className='add-green violet-gradient ' ref={greenref} /> */}
    </div>
  );
}

export default Main;
