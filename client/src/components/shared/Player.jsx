import React from "react";
import { MDBContainer } from "mdbreact";
import YouTube from "@u-wave/react-youtube";
import "./normalized.css";

const Player = () => {
  return (
    <div id="video">
      <MDBContainer className="titleCenter">
        <YouTube video="z27C1R0WUyE" width="300" autoplay="false" />
      </MDBContainer>
    </div>
  );
};

export default Player;
