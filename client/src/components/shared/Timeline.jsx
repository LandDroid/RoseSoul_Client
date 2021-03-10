import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Axios from "axios";
import "react-vertical-timeline-component/style.min.css";


const Timeline = function () {
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
      (async () => {
        await getShows();
      })();
    }, []);
  
    const getShows = async () => {
      const showsResp = await Axios.get("./api/shows");
      if (showsResp.status === 200) setShows(showsResp.data);
    };
  
    return (
      <div
      className="App"
      style={{ background: "white", fontFamily: "Trebuchet Ms" }}
    >
      <h1 className="centerText">SHOWS</h1>
      <VerticalTimeline>
      {shows &&
          shows.map((show, i) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={i}
            iconStyle={{ background: "pink", color: "#fff" }} 
          >
            <h2
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={show.showLocation }
            />
             <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={show.showLocation }
            />
             <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={show.showLocation }
            />
             <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={show.showLocation }
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    );
  };
    export default Timeline;