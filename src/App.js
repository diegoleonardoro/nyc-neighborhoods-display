import React from "react";
import Data from "./components/Data";
import Header from "./components/Header";
import Boroughs from "./components/Boroughs";

function App() {
  return (
    <div className="App">
      <Header labels={["About", "Log in", "Register"]} />
      <h1 style={{ fontSize: 20, left: "20%", position: "relative", marginBottom:50 }}>
        Explore Neighborhoods:
      </h1>

      <Boroughs />
    
    </div>
  );
}

export default App;
