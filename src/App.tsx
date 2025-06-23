import "./App.css";
import items from "./data/offers.json" with { type: "json" };

import Stars from "./components/stars";
import Listing from "./components/listing";
console.log(items);
function App() {
  return (
    <div className="container">
      <div className="stars-container">
        <Stars count={3} />
        <Stars />
        <Stars count={7} />
        <Stars count={1} />
      </div>
      <div className="listing-container">
        <Listing items={items} />
      </div>
    </div>
  );
}

export default App;
