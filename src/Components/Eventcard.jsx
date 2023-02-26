import {React} from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {TbReportMoney} from 'react-icons/tb';

import Logo from "../Assets/logo_final.png";
import { Link, useLocation } from "react-router-dom";
function Eventcard({ data, primary }) {
  const navigate=useNavigate()
  const clickhandler = (e) => {
    navigate(`/events/${data.name}`);
   
  };


  return (
    <div className="event-card" style={{ borderTopColor: primary }}>
      <div className="backdrop"></div>
      <div className="backdropImg">
        <img src={data.pics.primary}></img>
      </div>
      
      <div className="event-card-body-outer">
      {data.type!="flagship"  && (<TbReportMoney id="general-event"></TbReportMoney>)}
        <div className="event-card-header">
          <span>{data.title}</span>
        </div>

        <div className="event-card-body">
        
          {data.carddescription ? (
            <span>{data.carddescription}</span>
          ) : (
            <span>{data.description}</span>
          )}
        </div>
        <div
          className="read-more"
          style={{ backgroundColor: primary }}
          onClick={clickhandler}
        >
          <button>
            View<i className="fa fas-angle-right"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eventcard;
