import "./App.css";
import items from "./data/offers.json" with { type: "json" };

import Stars from "./components/stars";
import Listing from "./components/listing";
import MessageHistory from "./components/message-history/message-history";
import { messages } from "./consts";

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
      <div className="chat-container">
        <MessageHistory list={messages} />
      </div>
    </div>
  );
}

export default App;
