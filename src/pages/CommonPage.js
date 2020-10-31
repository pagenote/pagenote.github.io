import React, {Component} from 'react'
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CommonPage(Component,useHead=true,useFooter=true) {
  const mountNode = document.getElementById("app");
  ReactDOM.render(
    <>
      {
        useHead &&
        <Header />
      }
      <Component />
      {
        useFooter &&
        <Footer />
      }
    </>
    , mountNode);
}

