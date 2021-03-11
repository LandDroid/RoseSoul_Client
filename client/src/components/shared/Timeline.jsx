import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Axios from "axios";
import "react-vertical-timeline-component/style.min.css";
import "./normalized.css";

function Timeline() {
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
      <br />
      <h1 className="centerText">SHOWS</h1>
      <VerticalTimeline>
        {shows.map((show) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "pink", color: "#fff" }}
          >
            <h2
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: show.showTitle }}
            />
            <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: show.showLocation }}
            />
            <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: show.date }}
            />
            <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: show.showTime }}
            />
            <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: show.showInformation }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
