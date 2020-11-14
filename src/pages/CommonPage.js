import React, {Component} from 'react'
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 设置滚动title
export default function CommonPage(Component,useHead=true,useFooter=true) {
  const mountNode = document.getElementById("app");
  ReactDOM.render(
    <>
      <style jsx='true'>
       {`
        html,body{
          margin:0;
        }
        
      `}
      </style>
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

if(window.location.protocol.indexOf('https')>-1){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LBE869KVBS');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('Service Worker 注册成功!');
    }).catch(function (err) {
      console.log(err);
    });
  }
}

