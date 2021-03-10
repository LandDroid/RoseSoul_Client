import React from "react";
import { MDBContainer } from "mdbreact";
import YouTube from '@u-wave/react-youtube';


const Player = () => {
return (
<MDBContainer className="titleCenter">
        <YouTube
  video="z27C1R0WUyE"
  width="300"
  autoplay
/>
</MDBContainer>

);
};

export default Player;