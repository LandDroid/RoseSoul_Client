import React from "react";
import { MDBContainer } from "mdbreact";
import "./albumHeader.css";
import ScrollAnimation from "react-animate-on-scroll";

const Intro = () => {
  return (
    <div>
      <br />
      <MDBContainer className="titleCenter">
        <ScrollAnimation animateIn="fadeIn">
          <p align="center">
            Canadian Soul and RnB recording artist Rose to embark on her path
            towards her second Ep. In all honesty, sharing her personal story
            through a tumultuous relationship, and her way back to love. Listen
            as her singles unfold into a place of hope, resilience and strength.
          </p>
        </ScrollAnimation>
      </MDBContainer>
    </div>
  );
};

export default Intro;
