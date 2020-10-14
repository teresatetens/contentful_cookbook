import React from "react";
import './App.css';

import { client } from "./client";
import Card from "./Card";

import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer"

require('dotenv').config()

function App() {
 
  useEffect(() => {

   client.getEntries({ content_type: "header"}).then((response) => {
    })
    .catch(console.error)
  },[]);

  

  return (
        <div>
          <Header />
          <Banner />
          <div className="container">
            The main section container
          </div>
          <Footer />
        </div>);  
}


export default App;
