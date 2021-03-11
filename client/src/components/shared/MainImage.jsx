import React from "react";
import { MDBMask, MDBView } from "mdbreact";
import "./normalized.css";

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBView src="images/jessica_pic4.jpg" id="home">
            <MDBMask
              overlay="purple-light"
              className="flex-center flex-column text-white text-center"
            ></MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default MainImage;
