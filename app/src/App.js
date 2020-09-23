import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
