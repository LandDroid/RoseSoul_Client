import React from "react";
import { MDBContainer } from "mdbreact";
import "./albumHeader.css"
import Fade from 'react-reveal/Fade';
import ScrollAnimation from 'react-animate-on-scroll'

const AlbumHeader = () => {
return (
<MDBContainer className="titleCenter">
<Fade left>
          <ScrollAnimation animateIn="fadeIn"><h3>New Album</h3></ScrollAnimation>
        </Fade>
        <Fade right>
          <ScrollAnimation animateIn="fadeIn"><h1>Rose Soul Something!</h1></ScrollAnimation>
        </Fade>
  
</MDBContainer>
);
};

export default AlbumHeader;