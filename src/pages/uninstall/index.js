import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import Functions from "../../components/Functions"
import './donation.scss'


export default class CreatePage extends Component{

  render() {
    return (
      <div className='uninstall'>
        <Functions></Functions>
      </div>
    )
  }
}

CommonPage(CreatePage);
