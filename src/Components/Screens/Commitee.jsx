import React, { useRef } from "react";
import profile1 from "../../Assets/1905098.png";
import "../../Styles/Commmitee.css";
import { useNavigate } from "react-router-dom";
import commitee_data from "../../Data/commitee_data";
function Commitee() {
  const navigate = useNavigate();
  const greenTopref = useRef(null);
  const greenBottomref = useRef(null);
  const contentref = useRef(null);
  let h = 10;
  let i = 10;

  const wheelhandler = (event) => {
    // console.log("wheel");
    // console.log(event.deltaY);
    if (event.deltaY < 0) {
      h = 0;
      greenBottomref.current.style.height = "0px";
      // console.log(
      //   contentref.current.offsetHeight,
      //   contentref.current.scrollTop,
      //   contentref.current.scrollHeight
      // );
      if (contentref.current.scrollTop == 0) {
        i += 3;
        greenTopref.current.style.height = `${i}px`;
        if (i > 60) {
          greenTopref.current.style.height = `0px`;
          navigate("/web_devs");
        }
      }
    } else {
      greenTopref.current.style.height = "0px";
      i = 0;
      if (
        contentref.current.offsetHeight + contentref.current.scrollTop >=
        contentref.current.scrollHeight
      ) {
        h += 3;
        // console.log(h);
        greenBottomref.current.style.height = h + "px";
        if (h > 60) {
          greenBottomref.current.style.height = "0px";
          navigate("/contact_us");
        }
      }
    }
  };
  return (
    <div className="webdevs" ref={contentref} onWheel={wheelhandler} style={{"paddingTop":"0px"}}>
      {/* <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenBottomref} />
            <div className='add-green top-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenTopref} /> */}
      <div className="commitee">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/lf20_h3a2hlnn.json"
        ></lottie-player>
      </div>
      <div className="webdevs-container" style={{"paddingTop":"0px"}}>
        <div>
          <h1 className="webdevs-title" style={{"marginTop":"0px",paddingTop:"0p"}}>Commitee members</h1>
          <p className="webdevs-tilte-description">
            The crew in charge of painting the events.{" "}
          </p>
        </div>
        <div
          className="content-container"
          style={{ maxWidth: "1200px", margin: "auto", marginTop: "7%" }}
        >
          {commitee_data.map((item, index) => {
            return <Commiteemember key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Commitee;

const Commiteemember = ({ data }) => {
  // console.log(data);
  if (data) {
    return (
      <div className="content-container-item">
        <div className="content-container-item-image">
          <img src={data.profile} alt="profile" loading="lazy" />
        </div>
        <div className="content-container-item-description">
          <div className="commitee-name-x">
            <div>
              <h1>{data.name}</h1>
              <p>{data.year}</p>
            </div>
            <p>{data.position}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return true;
  }
};
