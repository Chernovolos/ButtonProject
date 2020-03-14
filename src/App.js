import React from 'react';
import './App.css';
import "./assets/MyCSS/List.css";
import "./assets/MyCSS/Footer.css";
import "./assets/MyCSS/Nav.css";
import "./assets/MyCSS/Header.css";
import "./assets/MyCSS/Button.css";
import Page from "./components/Page";
import Header from "./components/Header"
import Footer from "./components/Footer";



function App() {
  return (
      <React.Fragment>
          <Header/>
          <Page/>
          <Footer/>
      </React.Fragment>
  )
}

export default App;
