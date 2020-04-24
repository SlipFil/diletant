import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    
  );
}

export default App;
