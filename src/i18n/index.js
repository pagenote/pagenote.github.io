import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "note in page": "Notes in WebPage",
      "paper": "Paper",
      "setting": "Setting",
      "loading page": "Not found the info about {{page}}",
      "type-tips":'Muilt-Page: select muilt-page once time. Single-Page: Only one page can be selected once time',
      "limited_action_group":"Up to {{count}}",
      "add_action_group_tip":"You can add buttons vertically",
      "setting_pen":"custom you pen to highlight🖌",
      "max marked in a page":"you can highlight most {{number}} marks in a single webpage",
      "script_tip":"For developer ",
      "last sync at":"last sync at ：",
      "for donation user":"This function is for donation user first. Request and will be work after {{days}} days",
      "tio_for_clipboard_title":"Tip: how to store copy item to here",
      "clipboard_description":"double click the copy button, and the item will display in this place for you to review and re-copy(just click the card item).",
      "i_got_it":"Got it. Hide next time",
      "required_version":"But version {{version}} is required",
      "no_latest_version_found":"Did not found the required version with your browser? Wait a moment please, it will come soon maybe 2days",
      "not_available_now":"This function not available now. It will work in version {{version}}",
      "show highlight context":"Show Context",
      "hide highlight context":"Hide Context",
      "context tips":"context：The content before and after the highlight keyword",
      "available only in your pc":"The current page is only accessible in your browser.Unauthorized disclosure."
    }
  },
  zh_CN: {
    translation: {
      "note in page": "网页笔记",
      "paper": "文稿",
      "setting": "设置",
      "donation for us": "赞赏，成为赞助者",
      "follow us in wechat":"关注微信公众号",
      "Rate for PAGENOTE":"为 PAGENOTE 评分，让更多人看见",
      "feature in future":"功能规划",
      "system monitor, report a bug":"系统健康监测、日志；反馈bug",
      "Release Notes":"更新日志",
      "By Tags":"按标签分组",
      "By Domain":"按域名分组",
      "By Time":"按日期分组",
      "type-tips":"多选模式：一次可以选择多个PAGE浏览、操作；单选模式：一次只可选中一个PAGE浏览，更专注",
      "muilt-page":"多选模式",
      "single-page":"单选模式",
      "remove selected":"清空选中",
      "select a page on the left side":"请在左侧选择 PAGE 后查看",
      "confirm delete?":"确定删除?",
      "backup":"备份",
      "restore":"还原",
      "loading":"正在加载",
      "fetch error":'加载失败！',
      "retry":"重试",
      "loading page":"未获取到 {{page}} 相关信息.",
      "saved":"已保存",
      "user id":"用户ID",
      "nickname":"用户昵称",
      "set a username for your account":"为你当前浏览器账户取一个名字",
      "email":"邮箱",
      "donation":"打赏",
      "record id":"交易号",
      "set your donation record id in alipay or wechat":"如果你曾打赏过，请输入你的转账单号（微信）、交易订单号（支付宝）",
      "submit":"保存",
      "error invite code. Get it in wechat":"邀请码不正确，请关注微信公众号获取",
      "cloud store setting":"云盘存储设置",
      "connected":"已联通",
      "unconnected":"未联通",
      "last check time":"检测时间",
      "logs":"日志",
      "tips":"说明",
      "invite code":"邀请码",
      "reset success":"重置成功",
      "Only some letters, numbers and punctuation are supported":"仅支持字母、数字和部分标点符号",
      "limited_action_group":"最多设置{{count}}个",
      "add_action_group_tip":"你可以纵向添加按钮",
      "click any module to custom setting":"点击下方你想要个性化的模块进行设置",
      "single click to copy, dbclick for copy and save it to history":"单击仅复制，双击复制且保存到下方的历史面板中。暂不可自定义",
      "shortcut":"快捷键",
      "custom your Buttons":"自定义我的 PAGENOTE 按钮",
      "setting_pen":"设置标记画笔🖌",
      "highlight background color":"高亮背景色",
      "confirm":"确认",
      "cancel":"取消",
      "max marked in a page":"单页面最多标记{{number}}个",
      "Confirm to reset extension setting?":"确定重置「基础配置」「功能开关」？",
      "a script or a link is required":"执行函数与跳转链接至少填写一个",
      "use pre-defined":"使用预设",
      "select a pre-defined action button":"选择一个预设方案",
      "button name or description":"按钮名称、功能介绍",
      "svg file is supported":"必须设置一个SVG格式的图标哦",
      "only one key is supported":"快键键只能选一个数字或者字母哦",
      "optional":"可选的",
      "jump link":"跳转链接",
      "${keyword} in your link means the selected text":"链接里用${keyword}表示替换值",
      "click script":"单击执行函数",
      "For more info":"了解API",
      "delete":"删除",
      "script_tip":"可选，与跳转链接互斥。确保安全的一段执行脚本：(function(){})();",
      "icon":"按钮图标",
      "Extension":"插件配置",
      "Account":"账户配置",
      "Store":"存储设置",
      "sync to cloud":"同步至云端",
      "last sync at":"上次同步：",
      "Download MarkDown":"导出 MarkDown",
      "for donation user":"此功能为赞助用户优享。申请后{{days}}将开放",
      "To upgrade":"去升级",
      "Confirm to delete selected pages?":"确认删除选中页面？",
      "tio_for_clipboard_title":"提示：如何使用剪切板",
      "clipboard_description":"双击复制按钮，在复制同时也将其保存到历史面板中，供你回顾已经再次复制（单击任意一条复制内容卡片即可）",
      "i_got_it":"知道了。下次不再提示",
      "clipboard":"剪切板",
      "current version":"当前版本",
      "required_version":"至少需要升级到{{version}}才可继续使用",
      "no_latest_version_found":"对应平台还没有要求版本？请稍等，正在上架中，预计2天左右可上架。",
      "not_available_now":"该功能暂不可用，预计在版本 {{version}} 可用。",
      "You should install PAGENOTE firstly":"你还没有安装 PAGENOTE，安装后再来使用吧 ",
      "For Help":"反馈",
      "Follow Us":"支持我们",
      "For more": "了解更多",
      "new version is available":"发现新版本可更新",
      "show highlight context":"显示上下文",
      "hide highlight context":"隐藏上下文",
      "context tips":"上下文：指高亮关键词的前、后内容，可方便回顾原文内容",
      "open in new tab":"新标签页打开",
      "available only in your pc":"仅在你的浏览器可访问当前页面，未授权公开。",
      "comeback to home":"返回管理页"
    }
  }
};

let initLang = localStorage.getItem('lang') || window.navigator.language;
if(['zh-CN','zh_CN','zh_TW',"zh"].includes(initLang)){
  initLang = 'zh_CN';
}else{
  initLang = 'en';
}

localStorage.setItem('lang',initLang)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: initLang,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
