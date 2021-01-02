import React, {Component} from 'react'
import './styles.scss'
const initData = 'JTdCJTIyc3RlcHMlMjI6JTVCJTdCJTIyeCUyMjo3NTAsJTIyeSUyMjo1MzgsJTIyaWQlMjI6JTIyZGl2LnJpZ2h0LWNvbnRlbnQlM0VzZWN0aW9uJTIyLCUyMnRleHQlMjI6JTIyJUU0JUI4JTgwJUU1JTg4JTg3JUU1JThBJTlGJUU4JTgzJUJEJUU5JTgzJUJEJUU1JThGJUFGJUU0JUJCJUE1JUU1JTlDJUE4JUU1JThCJUJFJUU5JTgwJTg5JUU0JUI4JTgwJUU2JUFFJUI1JUU1JTg2JTg1JUU1JUFFJUI5JUU1JUJDJTgwJUU1JUE3JThCJUUzJTgwJTgyJTIyLCUyMnRpcCUyMjolMjIlRTUlQjAlQjElRTUlOUMlQTglRTYlOUMlQUMlRTklQTElQjUlRTUlQjAlOUQlRTglQUYlOTUlRTQlQjglODAlRTQlQjglOEIlRTUlOTAlQTclRUYlQkMlOEMlRTklOUElOEYlRTQlQkUlQkYlRTUlOEIlQkUlRTklODAlODklRTQlQjglODAlRTYlQUUlQjUlRTYlOTYlODclRTUlQUQlOTclRTUlOEQlQjMlRTUlOEYlQUYlRUYlQkMlODElMjIsJTIyYmclMjI6JTIycmdiYSgxMTQsMjA4LDI1NSklMjIsJTIydGltZSUyMjoxNjA1NDE2MzMwNzM4LCUyMmlzQWN0aXZlJTIyOnRydWUsJTIyb2Zmc2V0WCUyMjowLjUsJTIyb2Zmc2V0WSUyMjowLjk5LCUyMnBhcmVudFclMjI6NDk2LCUyMnByZSUyMjolMjIlRTUlOUMlQTglRTclQkQlOTElRTklQTElQjUlRTklODclOEMlRTklQUIlOTglRTQlQkElQUUlRTUlODUlQjMlRTklOTQlQUUlRTglQUYlOEQlRTUlOUMlQTglRTQlQkIlQkIlRTYlODQlOEYlRTclQkQlOTElRTklQTElQjUlRTUlODYlODUlRTUlOEIlQkUlRTklODAlODklRTQlQjglODAlRTYlQUUlQjUlRTUlODUlQjMlRTklOTQlQUUlRTUlODYlODUlRTUlQUUlQjklRTglQkYlOUIlRTglQTElOEMlRTklQUIlOTglRTQlQkElQUUlRUYlQkMlOUIlRTUlQTQlOUElRTclQTclOEQlRTklQTIlOUMlRTglODklQjIlRTUlOEYlQUYlRTQlQkIlQTUlRTklODAlODklRTYlOEIlQTklRUYlQkMlOEMlRTUlQkYlQUIlRTYlOEQlQjclRTklOTQlQUUlRTQlQjglODAlRTklOTQlQUUlRTklQUIlOTglRTQlQkElQUUlRTUlOUMlQTglRTclQkQlOTElRTklQTElQjUlRTklODclOEMlRTclOTUlOTklRTQlQjglOEIlRTQlQjglODAlRTYlQUUlQjUlRTclQUMlOTQlRTglQUUlQjAlRTUlOUMlQTglRTclQkQlOTElRTklQTElQjUlRTklODclOEMlRTclOTUlOTklRTQlQjglOEIlRTQlQkQlQTAlRTglODclQUElRTUlQjclQjElRTclOUElODQlRTclQUMlOTQlRTglQUUlQjAlRUYlQkMlOEMlRTYlOTQlQUYlRTYlOEMlODElRTYlOEYlOTIlRTUlODUlQTUlRTYlOTYlODclRTUlQUQlOTclRTMlODAlODElRTUlOUIlQkUlRTclODklODclRTclQUQlODklRTUlODYlODUlRTUlQUUlQjklRTMlODAlODIlRTUlODglQjclRTYlOTYlQjAlRTclQkQlOTElRTklQTElQjUlRTYlODklOTMlRTUlQkMlODAlRTclQUMlOTQlRTglQUUlQjAlRTQlQjklOUYlRTQlQkUlOUQlRTYlOTclQTclRTUlQUQlOTglRTUlOUMlQTglRTclQkQlOTElRTklQTElQjUlRTklOTglODUlRTglQUYlQkIlRTUlQTQlQTclRTclQkElQjIlRTclOTQlOUYlRTYlODglOTAlRTQlQkQlQTAlRTclOUElODQlRTclQUMlOTQlRTglQUUlQjAlRTUlQTQlQTclRTclQkElQjIlRTMlODAlODIlRTklODAlOUElRTglQkYlODclRTUlQTQlQTclRTclQkElQjIlRTUlOEYlQUYlRTQlQkIlQTUlRTUlQkYlQUIlRTklODAlOUYlRTYlQkIlOUElRTUlOEElQTglRTUlQUUlOUElRTQlQkQlOEQlRTUlODglQjAlRTYlQTAlODclRTglQUUlQjAlRTclOUElODQlRTQlQkQlOEQlRTclQkQlQUUlRTMlODAlODIlRTglQUUlQjAlRTUlQkQlOTUlRTclQkQlOTElRTklQTElQjUlRTUlQkYlQUIlRTclODUlQTclRUYlQkMlOEMlRTYlODglQUElRTUlOUIlQkUlRTUlQUYlQjklRTQlQkQlQTAlRTclOUElODQlRTclQkQlOTElRTklQTElQjUlRTglQkYlOUIlRTglQTElOEMlRTUlQkYlQUIlRTclODUlQTclRTQlQkYlOUQlRTUlQUQlOTglRUYlQkMlOEMlRTQlQjglOEQlRTclOTQlQTglRTYlODklOTMlRTUlQkMlODAlRTclQkQlOTElRTklQTElQjUlRTQlQjklOUYlRTglODMlQkQlRTUlQkYlQUIlRTklODAlOUYlRTYlOUYlQTUlRTclOUMlOEIlRTUlOEUlODYlRTUlOEYlQjIlRTclQkQlOTElRTklQTElQjUlRTglQUUlQjAlRTUlQkQlOTUlRTQlQkElODYlRTYlOUIlQjQlRTUlQTUlQkQlRTclOUElODQlRTclQUUlQTElRTclOTAlODYlRTQlQkQlQTAlRTclOUElODQlRTclQUMlOTQlRTglQUUlQjAlRTYlQTAlQjklRTYlOEQlQUUlRTYlQTAlODclRTclQUQlQkUlRTMlODAlODElRTUlOUYlOUYlRTUlOTAlOEQlRTMlODAlODElRTYlOTclQTUlRTYlOUMlOUYlRTclQUQlODklRTYlOTYlQjklRTUlQkMlOEYlRTglODElOUElRTUlOTAlODglRTYlOTUlQjQlRTclOTAlODYlRTclQUMlOTQlRTglQUUlQjAlRUYlQkMlOEMlRTUlQkYlQUIlRTklODAlOUYlRTYlQTMlODAlRTclQjQlQTIlRTclQUMlOTQlRTglQUUlQjAlRTMlODAlODIlRTYlOEIlQTUlRTYlOUMlODklRTQlQkQlQTAlRTQlQjglQUElRTQlQkElQkElRTclOUElODQlRTclOUYlQTUlRTglQUYlODYlRTYlOTglOUYlRTclOTAlODMlRTklQUIlOTglRTUlQkElQTYlRTglODclQUElRTUlQUUlOUElRTQlQjklODklRUYlQkMlOEMlRTYlOEYlOTIlRTQlQkIlQjYlMjBBUEklMjAlRTYlODklQTklRTUlQjElOTUlRTQlQkQlQTAlRTUlOEYlQUYlRTQlQkIlQTUlRTglODclQUElRTUlQUUlOUElRTQlQjklODklRTQlQkQlQTAlRTYlODMlQjMlRTglQTYlODElRTclOUElODQlRTUlOEElOUYlRTglODMlQkQlRTMlODAlODIlRTUlQTQlOEQlRTUlODglQjYlRTMlODAlODElRTYlOTAlOUMlRTclQjQlQTIlRTMlODAlODElRTclQkYlQkIlRTglQUYlOTElRUYlQkMlOEMlRTclOTQlOUElRTglODclQjMlRTglODclQUElRTUlQUUlOUElRTQlQjklODklRTglQTclQTYlRTUlOEYlOTElRTclOUElODQlRTglODQlOUElRTYlOUMlQUMlRTMlODAlODIlRTUlODklOEQlRTUlQkUlODAlMjBodHRwczovL3BhZ2Vub3RlLmNuL3NldHRpbmdQQUdFTk9URSUyMCVFNyU5QSU4NCVFNCVCQyU5OCVFNSU4QSVCRiVFNiU4OCU5MSVFNyU5QSU4NCVFNCVCQyU5OCVFNSU4QSVCRiVFRiVCQyU5QSVFNiVCMiVBMSVFNiU5QyU4OSVFNSVCOSVCRiVFNSU5MSU4QSVFMyU4MCU4MSVFNCVCOCU4RCVFOSU5QyU4MCVFOCVBNiU4MSVFNyU5OSVCQiVFNSVCRCU5NSVFMyU4MCU4MiVFNSU4RiVBRiVFNSVBRSU4QyVFNSU4NSVBOCVFNyVBNiVCQiVFNyVCQSVCRiVFNCVCRCVCRiVFNyU5NCVBOCVFNyU5QSU4NCVFNSVCNyVBNSVFNSU4NSVCNyVFMyU4MCU4MiVFNiU5NCVBRiVFNiU4QyU4MSVFOSVBQiU5OCVFNSVCQSVBNiVFOCU4NyVBQSVFNSVBRSU5QSVFNCVCOSU4OSVFMyU4MCU4MiVFNSU4QSU5RiVFOCU4MyVCRCVFNSVCQyU4MCVFNSU4RiU5MSVFNiVBMCVCOSVFNiU4RCVBRSVFNyU5NCVBOCVFNiU4OCVCNyVFNSU4RiU4RCVFOSVBNiU4OCVFNSVBRSU5RSVFNiU5NyVCNiVFOCVCMCU4MyVFNiU5NSVCNCVFMyU4MCU4MiUyMiwlMjJzdWZmaXglMjI6JTIyJUU1JThCJUJFJUU5JTgwJTg5JUU0JUI4JTgwJUU2JUFFJUI1JUU2JTk2JTg3JUU2JTlDJUFDJUUzJTgwJTgxJUU5JTgwJTg5JUU2JThCJUE5JUU0JUI4JTgwJTIyJTdEJTVELCUyMnNldHRpbmclMjI6JTdCJTIyYmFySW5mbyUyMjolN0IlMjJyaWdodCUyMjoxMjYsJTIydG9wJTIyOjU3LCUyMnN0YXR1cyUyMjolMjJmb2xkJTIyJTdEJTdELCUyMnVybCUyMjolMjJodHRwOi8vMC4wLjAuMDo4MDgwLyUyMiwlMjJsYXN0TW9kaWZpZWQlMjI6MTYwNTQxNjQ0NzI4MiwlMjJpY29uJTIyOiUyMmh0dHA6Ly8wLjAuMC4wOjgwODAvZmF2aWNvbi5pY28lMjIsJTIydGl0bGUlMjI6JTIyUEFHRU5PVEUlMjAlRTUlQjAlOEYlRTglODAlOEMlRTclQkUlOEUlRTclOUElODQlRTclQUMlOTQlRTglQUUlQjAlRTUlQjclQTUlRTUlODUlQjclMjIsJTIyZGVzY3JpcHRpb24lMjI6JTIycGFnZW5vdGUlMjAtJTIwJUU1JTgzJThGJUU1JTlDJUE4JUU2JTlDJUFDJUU1JUFEJTkwJUU0JUI4JThBJUU0JUI4JTgwJUU2JUEwJUI3JUU0JUI4JUJBJUU3JUJEJTkxJUU5JUExJUI1JUU1JTgxJTlBJUU3JUFDJTk0JUU4JUFFJUIwJTIyLCUyMmltYWdlcyUyMjolNUIlMjJodHRwOi8vMC4wLjAuMDo4MDgwL2ltZy93ZWNoYXQuanBnJTIyJTVELCUyMnNuYXBzaG90cyUyMjolNUIlNUQsJTIydmVyc2lvbiUyMjoyLCUyMmNhdGVnb3JpZXMlMjI6JTVCJTIyUEFHRU5PVEUlRTQlQkIlOEIlRTclQkIlOEQlMjIlNUQsJTIybm90ZSUyMjolMjIlMjIlN0Q=';

const keyPoints = [{
  title:'在网页里高亮关键词',
  id:'highlight',
  color:'#FFEB3B',
  content:'在任意网页内勾选一段关键内容进行高亮；多种颜色可以选择，快捷键一键高亮',
},{
  title:'在网页里留下一段笔记',
  id:'annotation',
  color:'#4b7eff',
  content:'在网页里留下你自己的笔记，支持插入文字、图片等内容。刷新网页打开笔记也依旧存在'
},{
  title:'网页阅读大纲',
  id:'guide',
  content:'生成你的笔记大纲。通过大纲可以快速滚动定位到标记的位置。'
},{
  title:'记录网页快照，截图',
  id:'snapshot',
  content:'对你的网页进行快照保存，不用打开网页也能快速查看历史网页记录了',
},{
  title:'更好的管理你的笔记',
  id:'platform',
  content:'根据标签、域名、日期等方式聚合整理笔记，快速检索笔记。拥有你个人的知识星球'
},{
  title:'高度自定义，API 扩展',
  id:'plugin',
  content:'你可以自定义你想要的颜色、快捷键。复制、搜索、翻译，甚至自定义触发的脚本。前往 https://pagenote.cn/setting',
  // images:['/release_asset/setting.png']
},{
  title:'PAGENOTE 的优势',
  id:'advance',
  content:'操作极其简单，只需要勾选一段内容，即可开始使用一切功能。没有广告、不需要登录。可完全离线使用的工具。支持高度自定义。功能开发根据用户反馈实时调整。'
}];

export default class Index extends Component{
  constructor(props) {
    super(props);
    this.state={
      lightItems:new Set(['highlight']),
      auto: true,
      currentVersion: document.documentElement.dataset.version || '',
    }
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = '/pagenote.js';
    document.body.appendChild(script);
    script.onload = function () {
      const pagenote = new PageNote('pagenote-home',{
        functionColors:[
          [
            {
              icon:'/icons/search.png',
              name:'search',
              shortcut:'s',
              onclick: function (e) {
                const text = pagenote.target ? pagenote.target.text : '';
                if(text){
                  window.getSelection().removeAllRanges();
                  window.open(`https://www.baidu.com/s?wd=${text}`);
                }
              },
            }
          ]
        ],
        sideBarActions:[],
      });
      pagenote.init(initData);
      // setTimeout(function () {
      //   tipUser();
      //   this.timer = setInterval(()=>{
      //     if(pagenote.recordedSteps.length>1){
      //       clearInterval(this.timer);
      //     }else{
      //       tipUser();
      //     }
      //   },5000)
      // },1000);


      function tipUser() {
        const target = document.getElementById('range');
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNode(target);
        selection.addRange(range);
        const position = target.getBoundingClientRect();
        pagenote.target.x = position.x+200;
        pagenote.target.y = position.y+20;
        pagenote.status = pagenote.CONSTANT.WAITING;
      }
    }
    let index = 0;
    this.timer = setInterval(()=>{
      if(this.state.auto){
        // let lightItems = this.state.lightItems;
        // lightItems.add(keyPoints[index%keyPoints.length].id);
        this.setActive(keyPoints[index%keyPoints.length].id);
        index++;
      }
    },5000)
  }

  setActive =(item)=>{
    if(item==='install'){
      window.location.href = '/me';
      return;
    }
    let {lightItems} = this.state;
    // if(lightItems.has(item)){
    //   lightItems.delete(item);
    // } else {
    //   lightItems = new Set([item]);
    //   // lightItems.add(item);
    // }
    lightItems = new Set([item]);
    this.setState({
      lightItems: lightItems
    })
  };

  toggleAuto=(toggle)=>{
    this.setState({
      auto: toggle
    })
  }

  render() {
    const {lightItems,auto,currentVersion} = this.state;

    return (
      <div className='index-page'>
        {/*<section className='install'>*/}
        {/*  <InstallBar />*/}
        {/*</section>*/}

        <section className="introduce">
          <div className="left-bar">
            <div className={`key-title install-p`} onClick={()=>this.setActive('install')} >
              <span className='key-point'>
                立即使用
                <span>{currentVersion?'[已安装]':''}</span>
              </span>
            </div>
            {
              keyPoints.map((item)=>(
                <div key={item.id} className={`key-title ${lightItems.has(item.id)?'active':''}`}
                     onClick={()=>this.setActive(item.id)}
                >
                  <span className='key-point' id={item.id}>
                    {item.title}
                  </span>
                </div>
              ))
            }
            <div>
              <label>
                <input type="checkbox" checked={auto} onChange={(e)=>{this.toggleAuto(e.target.checked)}}/> 自动展示
              </label>
            </div>
          </div>
          <div className="right-content">
            <div className="keys">
              {
                keyPoints.map((item)=>(
                  <div className={`key-content ${lightItems.has(item.id)?'active':''}`} id={item.id} key={item.id}>
                    <h3>{item.title}</h3>
                    <div>
                      {item.content}
                    </div>
                    {
                      (item.images||[]).map((img)=>(
                        <img height='200px'  key={img} src={img} alt=""/>
                      ))
                    }
                  </div>
                ))
              }
            </div>


            <section style={{color:'#666',borderTop: '1px dashed #d8d8d8'}}>
              <h3>
                <span className='light-me'>PAGENOTE 小而美的笔记工具</span>
              </h3>
              <div>
                <iframe src="//player.bilibili.com/player.html?aid=542768142&bvid=BV1bi4y1L79R&cid=256021866&page=1"
                        height='260px'
                        width='100%'
                        scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true"></iframe>
              </div>
              <p id='description'>
                一切功能都可以在勾选一段内容开始。
                <p>
                  勾选一段文本、选择一个颜色、批注一段笔记、生成一个提纲、可以锚点定位、创建截图快照、贴上一个个标签、管理平台整理、支持导入导出
                </p>
              </p>
            </section>
          </div>
        </section>
      </div>
    )
  }
}
