import ReactDOM from "react-dom";
import noone from './assets/photos/noone.jpg';
import one from './assets/photos/one.jpg';
import two from './assets/photos/two.jpg';
import three from './assets/photos/three.jpg';
import four from './assets/photos/four.jpg';
import five from './assets/photos/five.jpg';
import './index.css';


function App() {
  return (
    <div className="app">
      <h1 className="waiter_la"><strong>THANK YOU</strong> FOR ALL!<br className="br"/><strong className="s1" > 🤝🏻(❁´◡`❁)</strong></h1>
      <div className="images">
        <img src={noone} className="img" alt="" title="Your are ..." />
      </div>
    </div>
  );
}

export default App;
