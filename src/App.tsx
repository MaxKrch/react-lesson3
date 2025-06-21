import "./App.css";

import Stars from "./components/stars";

function App() {
  return (
    <div className="container">
      <Stars count={3} />
      <Stars />
      <Stars count={7} />
      <Stars count={1} />
    </div>
  );
}

export default App;
