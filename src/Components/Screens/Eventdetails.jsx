import React, { useRef, useState, useEffect } from "react";
import "../../Styles/Eventdetails.css";
import profile from "../../Assets/Events/one.jpg";
import dummyprofile from "../../Assets/1905098.png";
import calendar from "../../Assets/Icons/calendar.svg";
import Faq from "../Faq";
import { useLocation, useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";
function Eventdetails() {
  const [Event_data, seteventt_data] = useState(null);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const event_name_from_path = pathname.split("/")[2];
  const contactref = useRef(null);
  const linkxref = useRef(null);
  const sociallinksref = useRef(null);
  const sidenavref = useRef();
  const [open, setopen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("event_details"));
    //console.log("data is ", data);
    console.warn(event_name_from_path);

    const temp = data.filter((event) => event.name === event_name_from_path)[0];
    // console.log("your content is", temp);
    setTimeout(() => {
      contactref.current.innerHTML = `
            <a href="tel:+91 ${temp.contact}">
    <i class="fas fa-phone"></i>
    </a>
            `;
    }, 100);

    seteventt_data(temp);
  }, []);
  if (!Event_data) {
    return true;
  } else if (Event_data.key) {
    return (
      <div className="eventdetails">
        <div className="back-btn-container" onClick={() => navigate("/events")}>
          <i class="fas fa-arrow-left"></i>
        </div>
        <div className="eventdetails-container">
          <div className=" image-container">
            <div className="one">
              {Event_data.pics.primary && (
                <img src={Event_data.pics.primary} alt="event" />
              )}
            </div>
          </div>
          <div className="event-content-container">
            <div className="event-content-section1">
              <div className="e-title">
                <div className="header">
                  <h1>{Event_data.title}</h1>
                  <p>
                    <i className="fas fa-calendar-week mr-2 mb-3"></i>
                    {Event_data.dateTime}
                  </p>
                </div>
                <div
                  className="google-calendar"
                  ref={contactref}
                  style={{
                    backgroundColor: "var(--fg-green)",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "500px",
                  }}
                ></div>
              </div>

              <div className="tags">
                {Event_data.tags &&
                  Event_data.tags.map((tag, index) => {
                    return (
                      <div className="tag">
                        {" "}
                        <i
                          class="fas fa-tag"
                          style={{ marginRight: "5px" }}
                        ></i>
                        {tag}{" "}
                      </div>
                    );
                  })}
              </div>
              <div className="e-description">
                <p>{Event_data.description}</p>
              </div>
              <div className="e-title-m">Eligibility</div>
              <div className="e-description-m">
                <p>{Event_data.eligibility}</p>
              </div>
              {Event_data.entry && (
                <>
                  <div className="e-title-m">Entry fee</div>
                  <div className="e-description-m">
                    {Event_data.entry.map((data) => {
                      return (
                        <tr>
                          <td>{data.type} </td>
                          {/* <td>: RS {data.amt}</td> */}
                        </tr>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="e-title-m">Event Info</div>
              <div className="e-description-m">
                <ul
                  className="list-decimal rules"
                  style={{ "list-style-type": "none" }}
                >
                  {Event_data.rules &&
                    Event_data.rules.map((rule, index) => {
                      return (
                        <li style={{ display: "flex" }}>
                          <IoSend
                            style={{
                              marginRight: "5px",
                              color: "#05ffa3",
                              height: "10px",
                            }}
                          ></IoSend>
                          {rule}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="e-title-m">Speaker info</div>
              <div className="e-description-m">
                <p>{Event_data.speakerinfo}</p>
              </div>
              <div className="e-title-m faq-header fq-header">
                Frequently asked questions
              </div>

              <div className="faq">
                {Event_data.faq &&
                  Event_data.faq.map((faq, index) => {
                    // console.log("faq is ", faq);
                    return <Faq key={index} data={faq} />;
                  })}
              </div>

              
              {Event_data.form != "" && (
                  <div className="final-btn">
                    <a href={Event_data.form} target="_blank">
                      <div className="submit-btn-event">
                        <div>
                          Register Now
                        </div>
                      </div>
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="eventdetails">
        <div className="back-btn-container" onClick={() => navigate("/events")}>
          <i class="fas fa-arrow-left"></i>
        </div>
        <div className="eventdetails-container">
          <div className=" image-container">
            <div className="one">
              {Event_data.pics.primary && (
                <img src={Event_data.pics.primary} alt="event" />
              )}
            </div>
          </div>
          <div className="event-content-container">
            <div className="event-content-section1">
              <div className="e-title">
                <div className="header">
                  <h1>{Event_data.title}</h1>
                  <p>
                    <i className="fas fa-calendar-week mr-2 mb-3"></i>
                    {Event_data.dateTime}
                  </p>
                </div>
                <div
                  className="google-calendar"
                  ref={contactref}
                  style={{
                    backgroundColor: "var(--fg-green)",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "500px",
                  }}
                ></div>
              </div>

              <div className="tags">
                {Event_data.tags &&
                  Event_data.tags.map((tag, index) => {
                    return (
                      <div className="tag">
                        {" "}
                        <i
                          class="fas fa-tag"
                          style={{ marginRight: "5px" }}
                        ></i>
                        {tag}{" "}
                      </div>
                    );
                  })}
              </div>
              <div className="e-description">
                <p>{Event_data.description}</p>
              </div>
              <div className="e-title-m">Eligibility</div>
              <div className="e-description-m">
                <p>{Event_data.eligibility}</p>
              </div>
              {Event_data.entry && (
                <>
                  <div className="e-title-m">Entry fee</div>
                  <div className="e-description-m">
                    {Event_data.entry.map((data) => {
                      return (
                        <tr>
                          <td>{data.type} </td>
                          <td>: RS {data.amt}</td>
                        </tr>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="e-title-m">Rules</div>
              <div className="e-description-m">
                <ul
                  className="list-decimal rules"
                  style={{ "list-style-type": "none" }}
                >
                  {Event_data.rules &&
                    Event_data.rules.map((rule, index) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            marginTop: "10px",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <IoSend
                              style={{
                                marginRight: "15px",
                                color: "#05ffa3",
                                fontSize: "26px !important",
                                height: "100% !important",
                              }}
                            ></IoSend>
                          </div>

                          <li
                            style={{
                              fontSize: "12px !important",
                            }}
                          >
                            {rule}
                          </li>
                        </div>
                      );
                    })}
                </ul>

                <div className="e-title-m">Prize</div>

                <div className="e-description-m cen">
                  {Event_data.prizes["gold"] ? (
                    <div className="trophies">
                      <div className="gold-trophy">
                        <i class="fa fa-trophy"></i>
                        <div>
                          <div>Winner</div>
                          <i className="fas fa-rupee-sign"></i>
                          {Event_data.prizes["gold"]}
                        </div>
                      </div>

                      {Event_data.prizes["silver"] != undefined && (
                        <div className="silver-trophy">
                          <i class="fa fa-trophy"></i>
                          <div>
                            <div>Runner</div>
                            <i className="fas fa-rupee-sign"></i>
                            {Event_data.prizes["silver"]}
                          </div>
                        </div>
                      )}

                      {/* <div className="bronze-trophy">
                        <i class="fa fa-trophy"></i>
                        <div>
                          <div>Third place</div>
                          <i className="fas fa-rupee-sign"></i>
                          {Event_data.prizes["bronze"]}
                        </div>
                      </div> */}
                    </div>
                  ) : (
                    <div>{Event_data.prizes}</div>
                  )}
                </div>
                <div className="e-title-m">Result</div>
                <div className="e-description-m ">
                  {Event_data.completed ? true : "Not yet completed"}
                </div>

                <div className="e-title-m faq-header fq-header">
                  Frequently asked questions
                </div>
                <div className="faq">
                  {Event_data.faq &&
                    Event_data.faq.map((faq, index) => {
                      return <Faq key={index} data={faq} />;
                    })}
                </div>

                {Event_data.form == "" && (
                  <div className="final-btn">
                    <div className="submit-btn-event">
                      <div>
                        {Event_data.s ? <>Open contest</> : <>Coming soon</>}
                      </div>
                    </div>
                  </div>
                )}

                {Event_data.form != "" && (
                  <div className="final-btn">
                    <a href={Event_data.form} target="_blank">
                      <div className="submit-btn-event">
                        <div>
                          {Event_data.s ? <>Open contest</> : <>Register Now</>}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Eventdetails;

const ManagerProfile = ({ name, instagram }) => {
  const circleref = useRef(null);
  const profileref = useRef(null);
  const socialref = useRef(null);
  const cardref = useRef(null);
  const hoverhandler = () => {
    circleref.current.classList.add("circle-hover");
    socialref.current.classList.add("social-hover");
    profileref.current.classList.add("img-hover");
  };
  const leavehandler = () => {
    circleref.current.classList.remove("circle-hover");
    socialref.current.classList.remove("social-hover");
    profileref.current.classList.remove("img-hover");
  };
  return (
    <div className="manager-profile">
      <div className="manager-profile-container" ref={cardref}>
        <div className="circle circle-hover" ref={circleref}></div>
        <div className="manager-profile-image img-hover " ref={profileref}>
          <img src={dummyprofile} alt="event" />
        </div>
        <div className="manager-profile-details">
          <div className="manager-profile-name">
            <h1>Manager Name</h1>
          </div>
          <div className="manager-profile-description">
            <p>Third year CSE</p>
          </div>
        </div>
        <div className="manager-social-links social-hover" ref={socialref}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};
