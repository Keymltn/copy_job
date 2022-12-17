import Brands from './components/brands/Brands';
import Location from './components/location/Location';
import Carousel from './components/сarousel/Carousel';
import React from "react";
import ReactDOM from "react-dom";
import "swiper/css/bundle";
// ReactDOM.render(<App />, document.getElementById("app"));

function App() {
  return (
    <div className="app">
      <Brands/>
      <Location/>
      <Carousel/>
    </div>
  );
}

export default App;
