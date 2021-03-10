import React from "react";
import Routes from "./Routes";
import AlbumHeader from "./shared/AlbumHeader";
import Nav from "./shared/Nav";
import Timeline from "./shared/Timeline";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes />
      <AlbumHeader />
      <Timeline />
    </React.Fragment>
  );
}

export default App;