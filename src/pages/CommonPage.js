import React, {Component} from 'react'
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBrowserTypeAndVersion} from "@/utils/document";
import {sendEvent} from "@/utils/api";
import '../i18n';

import '../styles/common.scss'
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

const track = window.location.protocol.indexOf('https')>-1;
if(track){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  const browser = getBrowserTypeAndVersion();
  if(['firefox','safari'].includes(browser.type.toLowerCase())){
     sendEvent('me','view',window.location.pathname,'','pageview');
  } else{
    gtag('js', new Date());
    gtag('config', 'G-LBE869KVBS');
  }
}

if ('serviceWorker' in navigator && window.location.protocol.indexOf('https')>-1) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    console.log('Service Worker 注册成功!');
  }).catch(function (err) {
    console.log(err);
  });
}
