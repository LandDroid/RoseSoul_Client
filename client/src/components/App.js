import React from "react";
import AlbumHeader from "./shared/AlbumHeader";
import Intro from "./shared/Intro";
import MainImage from "./shared/MainImage";
import Nav from "./shared/Nav";
import Player from "./shared/Player";
import Timeline from "./shared/Timeline";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <MainImage />
      <Intro />
      <Timeline />
      <AlbumHeader />
      <Player />
    </React.Fragment>
  );
}

export default App;
