import React from "react";
import Images from "./components/images";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Unsplash API Infinite Photo Scroll</h1>
          </div>
        </div>
      </section>
      <section className="container">
        <Images />
      </section>
    </div>
  );
}

export default App;
