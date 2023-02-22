import React, { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { events } from "../../Data/timelinedata";
import "../../Styles/Timeline.css";
function Timelinex() {
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
          navigate("/events");
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
          navigate("/web_devs");
        }
      }
    }
  };
  return (
    <div
      className="webdevs"
      ref={contentref}
      onWheel={wheelhandler}
      
    >
      {/* <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenBottomref} />
            <div className='add-green top-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenTopref} /> */}

      <div className="webdevs-container">
        <div>
          <h1
            className="webdevs-title"
            style={{ textAlign: "left", color: "#05ffa3" }}
          >
            Timeline
          </h1>
        </div>
        <>
          {events.map((event, index) => {
            return (
              <Timeline position="alternate">
                {index % 2 == 0 ? (
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      className="event-date"
                    >
                      {event.date}
                      <Typography>{event.time}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector
                        sx={{
                          bgcolor: "#8103ff",
                          boxShadow:
                            "rgba(129, 3, 255,0.6) 0px 54px 55px, rgba(129, 3, 255,0.6) 0px -12px 30px, rgba(129, 3, 255,0.6) 0px 4px 6px, rgba(129, 3, 255,0.6) 0px 12px 13px, rgba(129, 3, 255,0.6) 0px -3px 5px",
                        }}
                      />
                      <TimelineDot
                        color="grey"
                        variant="outlined"
                      ></TimelineDot>
                      <TimelineConnector
                        sx={{
                          bgcolor: "#bc05ff",
                          boxShadow: "#bc05ff 0px 5px 15px ",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "50px", px: 2, fw: "900" }}>
                      <Typography className="event_name" component="span">
                        {event.title.toUpperCase()}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ) : (
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ py: "50px", px: 2 }}
                      variant="body2"
                    >
                      <Typography className="event_name" component="span">
                        {event.title.toUpperCase()}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector
                        sx={{
                          bgcolor: "#8103ff",
                          boxShadow:
                            "rgba(129, 3, 255,0.6) 0px 54px 55px, rgba(129, 3, 255,0.6) 0px -12px 30px, rgba(129, 3, 255,0.6) 0px 4px 6px, rgba(129, 3, 255,0.6) 0px 12px 13px, rgba(129, 3, 255,0.6) 0px -3px 5px",
                        }}
                      />
                      <TimelineDot color="grey" variant="filled"></TimelineDot>
                      <TimelineConnector
                        sx={{
                          bgcolor: "#bc05ff",
                          boxShadow: "#bc05ff 0px 5px 15px ",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ m: "auto" }}
                      color="gray"
                      className="event-date"
                    >
                      {event.date}
                      <Typography>{event.time}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                )}
              </Timeline>
            );
          })}
        </>
      </div>
      <div className="rocket">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src={
            "https://lottie.host/2bb1bc54-83bf-46bf-a363-c86e0a294085/zbxKu3vW3m.json"
          }
        ></lottie-player>
      </div>
      <div className="astronaut">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src={
            "https://lottie.host/eb296674-d2b8-400f-8cd4-dfce9a6c2fa3/qgK0JoLgWU.json"
          }
        ></lottie-player>
      </div>
    </div>
  );
}

export default Timelinex;
