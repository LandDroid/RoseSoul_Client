import React from "react";
import Routes from "./Routes";
import AlbumHeader from "./shared/AlbumHeader";
import Nav from "./shared/Nav";
import Player from "./shared/Player";
import Timeline from "./shared/Timeline";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes />
      <AlbumHeader />
      <Timeline />
  <Player />
    </React.Fragment>
  );
}

export default App;