import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Results from "./components/Results";

function App() {
  return (
    <div className="app">
      <Header />
      <NavigationBar />
      <Results/>
    </div>
  );
}

export default App;
