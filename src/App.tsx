import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <div className="wrapper"> */}
      <Header />
      <main className="page"></main>
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
