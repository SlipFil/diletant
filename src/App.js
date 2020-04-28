import React from "react";

import "./App.css";
import HeaderContainer from "./components/header/headerContainer";
import Footer from "./components/footer/footer";
import ContentContainer from "./components/content/contentContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <HeaderContainer />
        <ContentContainer />
        
        <Footer />
      </div>
    
  );
}

export default App;
