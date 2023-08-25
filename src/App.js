import React from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="App">
      <main>
        <Spline scene="https://prod.spline.design/sk5Ff9Ww86eezfGz/scene.splinecode"/>

        {/* <Spline scene="https://prod.    spline.design/s7ijEefWWMzbSgd0/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/sk5Ff9Ww86eezfGz/scene.splinecode"/>

        <Spline scene='https://my.spline.design/3dtextbluecopy-73d3aff9b88613c83af64efc6df5c770/'/> */}
      </main>
    </div>
  );
}

export default App;
