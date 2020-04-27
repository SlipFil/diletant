import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ContentContainer from "./components/content/contentContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Header />
        <ContentContainer />
        
        <Footer />
      </div>
    
  );
}

export default App;
