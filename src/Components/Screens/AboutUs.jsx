import React, { useRef } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "../../Styles/AboutUs.css";
import "../../Styles/ComponentsStyles/Staff_card.css";
import what_we_do from "../../Assets/abt-us.svg";
import image1 from "../../Assets/1905098.png";
import Staffcard from "../../Components/StaffCard";
import college_logo from "../../Assets/cit_logo.png";
import department_logo from "../../Assets/department_logo.png";
import { useNavigate } from "react-router-dom";
function AboutUs() {
  const navigate = useNavigate();
  const greenTopref = useRef(null);
  const greenBottomref = useRef(null);
  const contentref = useRef(null);
  let h = 10;
  let i = 10;

  const wheelhandler = (event) => {
    console.log("wheel");
    console.log(event.deltaY);
    if (event.deltaY < 0) {
      h = 0;
      greenBottomref.current.style.height = "0px";
      console.log(
        contentref.current.offsetHeight,
        contentref.current.scrollTop,
        contentref.current.scrollHeight
      );
      if (contentref.current.scrollTop == 0) {
        i += 3;
        greenTopref.current.style.height = `${i}px`;
        if (i > 60) {
          greenTopref.current.style.height = `0px`;
          navigate("/");
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
        console.log(h);
        greenBottomref.current.style.height = h + "px";
        if (h > 60) {
          greenBottomref.current.style.height = "0px";
          navigate("/events");
        }
      }
    }
  };
  return (
    <div className="about-us" onWheel={wheelhandler} ref={contentref} >
      <div className="lottie-player">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/packages/lf20_6cysxuqv.json"
        ></lottie-player>
      </div>
      <div className="robot">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json"
        ></lottie-player>
      </div>
      <div className="quote">
        <i class="fas fa-quote-left"></i> Don’t just learn, experience!!{" "}
        <i class="fas fa-quote-right"></i>
      </div>

      <div className="descriptionx">
        <b style={{ color: "#be57ff" }}>CRYPTERA</b> is a National-level
        technical intercollegiate symposium conducted by Computer Science and
        Engineering department of Coimbatore Institute of Technology. CRYPTERA
        is a series of events both technical and non-technical along with
        webinars and workshops for students to participate.
      </div>

      <div className="contentx">
        <div className="oney">
          <div className="titley">About CIT</div>
          <div className="descriptiony">
            The{" "}
            <span className="highlighter">
              V. Rangasamy Naidu Educational Trust
            </span>{" "}
            devoted to the cause of promoting technical and scientific literacy,
            established
            <span className="highlighter">
              {" "}
              Coimbatore Institute of Technology (CIT){" "}
            </span>
            in Coimbatore, Tamil Nadu, South India in{" "}
            <span className="highlighter">1956</span>. CIT is one of the most
            reputed and prestigious educational institutions in India. The
            Institute backed by World Class research and development over the
            years attained autonomous status in 1987.
          </div>
        </div>
        <div className="twoy">
          <img src={college_logo} alt="logo" />
        </div>
      </div>
      <div className="contentx">
        <div className="oney">
          <div className="titley">About the Department</div>
          <div className="descriptiony">
            The department imparts{" "}
            <span className="highlighter">
              world class training and research
            </span>{" "}
            . The department provides state of the art computing facilities to
            the students. Graduates from the department are most wanted by both
            academia and corporates like Microsoft, Yahoo, IBM, Oracle, EMC2.
            All over the world, alumni of the department occupy{" "}
            <span className="highlighter">
              top positions in both academia and industry
            </span>{" "}
            especially one of the alumni occupies as{" "}
            <span className="highlighter">Ambassador of India in Israel</span>.
            Important research and technical patents are registered by our
            alumnus. The department has generated funds from various government
            organizations like AICTE, MHRD, and DST for promoting research
            activities and modernization.
          </div>
        </div>
        <div className="twoy">
          <img src={department_logo} alt="logo" />
        </div>
      </div>
      {/* <div
        className="add-green bg-gradient-to-tr from-green-600 to-green-300 "
        ref={greenBottomref}
      />
      <div
        className="add-green top-fixed bg-gradient-to-tr from-green-600 to-green-300 "
        ref={greenTopref}
      /> */}
      <div
        className="titley"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        Our Sincere thanks to
      </div>
      <div className="container5 ">
        <Staffcard image={require("../../Assets/Staffs/principal.jpg")} name="Dr.A.Rajeswari" position={"Principal"} />
        <Staffcard image={require("../../Assets/Staffs/hod.jpg")} name="Dr.G.Kousalya" position={"HOD"} />
        <Staffcard image={"https://www.cit.edu.in/wp-content/uploads/2015/10/AK-Sep-18-Image.jpg"} name="Dr.A.Kunthavai" position={"Senior tutor"} />
        <Staffcard image={"https://www.cit.edu.in/wp-content/uploads/2015/10/185.jpg"} name="Dr.K.Amshakala" position={"Tutor"} />
        <Staffcard image={"https://www.cit.edu.in/wp-content/uploads/2015/10/446.jpg"} name="Dr. A.Priyadharshini" position={"Tutor"} />
        <Staffcard image={"https://www.cit.edu.in/wp-content/uploads/2015/10/1251.jpg"} name="Mr.M.Maranco" position={"Tutor"} />
       
      
      </div>
      <div className="py-20"></div>
    </div>
  );
}

export default AboutUs;
