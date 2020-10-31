import React, {Component} from 'react'
import InstallBar from '../../components/InstallBar';
import Glance from '../../components/Functions';
import './styles.scss'
const initData = 'JTdCJTIyc3RlcHMlMjI6JTVCJTVCNzMwLDg3LCUyMmRpdi5wb2ludC5ub3RlJTIyLCUyMiVFNiVBMCU4NyVFNiVCMyVBOCVFNyVBQyU5NCVFOCVBRSVCMCUyMiwlMjIlRTUlOEYlQUYlRTQlQkIlQTUlRTUlOUMlQTglRTUlQkQlOTMlRTUlODklOEQlRTklQTElQjUlRTglQUYlOTUlRTglQUYlOTUlMjIsJTIycmdiYSgxMTQsMjA4LDI1NSwwLjg4KSUyMiwxNTk4NDM3MTE2OTExLGZhbHNlLDE2MCwzNCwzMDAlNUQlNUQsJTIyc2V0dGluZyUyMjolN0IlMjJiYXJJbmZvJTIyOiU3QiUyMnJpZ2h0JTIyOjUzLCUyMnRvcCUyMjo2MiwlMjJzdGF0dXMlMjI6JTIyZm9sZCUyMiU3RCU3RCwlMjJ1cmwlMjI6JTIyaHR0cDovLzAuMC4wLjA6MzAwMC8lMjIsJTIybGFzdE1vZGlmaWVkJTIyOjE1OTg0MzcyMTE5NjEsJTIyaWNvbiUyMjolMjJodHRwOi8vMC4wLjAuMDozMDAwL2Zhdmljb24uaWNvJTIyLCUyMnRpdGxlJTIyOiUyMiVFNSVCMCU4RiVFOCU4MCU4QyVFNyVCRSU4RSVFNyU5QSU4NCVFNyVCRCU5MSVFOSVBMSVCNSVFNiVBMCU4NyVFOCVBRSVCMCVFNSVCNyVBNSVFNSU4NSVCNyUyMiwlMjJpbWFnZXMlMjI6JTVCJTVELCUyMnNuYXBzaG90cyUyMjolNUIlNUQsJTIydmVyc2lvbiUyMjoxLCUyMmNhdGVnb3J5JTIyOiUyMlBBR0VOT1RFJTIyLCUyMm5vdGUlMjI6JTIyJTIyJTdE';

export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state={
    }
  }

  componentDidMount() {
    // const script = document.createElement('script');
    // script.src = '/pagenote.js';
    // document.body.appendChild(script);
    // script.onload = function () {
    //   const pagenote = new PageNote('pagenote-home',{
    //     functionColors:[
    //       {
    //         icon:'/icons/search.png',
    //         name:'search',
    //         shortcut:'s',
    //         onclick: function (e) {
    //           const text = pagenote.target ? pagenote.target.text : '';
    //           if(text){
    //             window.getSelection().removeAllRanges();
    //             window.open(`https://www.baidu.com/s?wd=${text}`);
    //           }
    //         },
    //       }
    //     ]
    //   });
    //   pagenote.init(initData);
    //   setTimeout(function () {
    //     tipUser();
    //     this.timer = setInterval(()=>{
    //       if(pagenote.recordedSteps.length>1){
    //         clearInterval(this.timer);
    //       }else{
    //         tipUser();
    //       }
    //     },5000)
    //   },1000);
    //
    //
    //   function tipUser() {
    //     const target = document.getElementById('range');
    //     let selection = window.getSelection();
    //     let range = document.createRange();
    //     range.selectNode(target);
    //     selection.addRange(range);
    //     const position = target.getBoundingClientRect();
    //     pagenote.target.x = position.x+200;
    //     pagenote.target.y = position.y+20;
    //     pagenote.status = pagenote.CONSTANT.WAITING;
    //   }
    // }
  }


  render() {
    return (
      <div className='index-page'>
        <section className='points fl'>
          <div className='point main'>
            <div>
              <h2 id='range'>
                收录重点
              </h2>
              <article>
                只需要一个简单的点击，即可标记收集你的重点、网页。
              </article>
            </div>
          </div>
          <div className='point note'>
            <div>
              <h2>
                标注笔记
              </h2>
              <article>
                快捷地为网页添加标注。
                <br/>一个网页一处笔记，把笔记留在网页里。
              </article>
            </div>
          </div>
          <div className='point manage'>
            <div>
              <h2>
                轻松管理
              </h2>
              <article>
                高效地管理你的标记，智能关联书签、分类。拥有个人知识星球。
              </article>
            </div>
          </div>
        </section>
        <section className='install'>
          <InstallBar />
        </section>
        <Glance />
      </div>
    )
  }
}
