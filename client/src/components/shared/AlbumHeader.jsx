import React from "react";
import { MDBContainer } from "mdbreact";
import "./normalized.css";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";

const AlbumHeader = () => {
  return (
    <MDBContainer className="titleCenter">
      <Fade left>
        <ScrollAnimation animateIn="fadeIn">
          <h3>Vidoes</h3>
        </ScrollAnimation>
      </Fade>
      <Fade right>
        <ScrollAnimation animateIn="fadeIn">
          <h1>By Rose Soul</h1>
        </ScrollAnimation>
      </Fade>
    </MDBContainer>
  );
};

export default AlbumHeader;
