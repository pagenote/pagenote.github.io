import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
import './page.scss'
import CommonPage from "../CommonPage";


const datas = {
  privacy:{"time":1604150080100,"blocks":[{"type":"paragraph","data":{"text":"请您审慎阅读并选择接受或不接受本协议。<b>若您不同意本条款，请您立即停止使用或卸载本扩展应用</b>。"}},{"type":"paragraph","data":{"text":"本隐私政策包括以下内容："}},{"type":"list","data":{"style":"ordered","items":["我们如何收集您的个人信息","我们如何使用您的个人信息","我们如何共享、转让、公开披露您的个人信息","个人信息的存储","隐私政策的变更和通知"]}},{"type":"paragraph","data":{"text":"PAGENOTE无服务器端存储用户信息"}},{"type":"list","data":{"style":"ordered","items":["我们<b>不会收集你的个人身份信息</b>（指能够单独或者与其他信息结合识别特定自然人身份的信息，如姓名、手机号、邮件等）。但对每一个用户会生成一个随机字符串ID，用于标识当前用户。","日志记录 我们将对您在使用过程中产生的&nbsp;<b>部分关键行为进行记录</b>，<b>默认视为【参与改进计划】</b>，如启用、关闭扩展应用。这些记录是为了更好的帮助我们了解产品功能的使用频率，为后续的改进提供参考。我们<b>仅会记录功能使用的次数，而不会记录具体的使用数据</b>。例，我们并不会收集你访问了某个网站的URL。如果你不希望我们获取这些信息，你可以在设置页面中，关闭【参与改进计划】。<br>","授权登录 我们提供了使用GitHub账号授权的功能，授权后将可以通过本扩展调用GitHub API，如创建issue，获取账号信息等。授权信息仅存储在你的浏览器本地，我们不会收集这些授权信息。<br>","我们不会共享、转让、公开披露您的个人信息。如有需要，在此之前会再次征求您的同意。<br>","您的个人信息存储在你的浏览器本地。<br>","隐私政策发生改变时，我们再另行通知与您。<br>"]}}],"version":"2.19.0"},
};

export default class CreatePage extends Component{

  render() {
    let data = datas.privacy;
    return (
      <div className='page' data-pagenote='new'>
        <div className='editor_container'>
          <Editor data={data} readonly={true}></Editor>
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage);
