import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import InstallBar from "../../components/InstallBar";



export default class RatePage extends Component{

  render() {
    return (
      <div className='rate_me'>
          <style jsx='true'>{`
                .rate_me{
                    font-size:14px;
                    padding: 12px;
                    margin: 200px auto;
                    text-align:center;
                }
          `}</style>
          <div className="rate-container">
              <InstallBar />
              <p>
                  点击上方对应浏览器，前往评分
              </p>
          </div>
      </div>
    )
  }
}

CommonPage(RatePage);
