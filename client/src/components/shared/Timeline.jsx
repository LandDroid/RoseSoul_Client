import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events.json";

import "./timeline.css";

function Timeline() {
  return (
    <div
      className="App"
      style={{ background: "white", fontFamily: "Trebuchet Ms" }}
    >
      <h1 className="centerText">DATES</h1>
      <VerticalTimeline>
        {events.map(event => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            
            iconStyle={{ background: "pink", color: "#fff" }}
          >
            <h2
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
             <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.location }}
            />
             <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.date }}
            />
             <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.time }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
      );
    }
    
    export default Timeline;