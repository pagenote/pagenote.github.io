import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "note in page": "Notes in Page",
      "paper": "Paper",
      "setting": "Setting",
      "loading page": "Not found the info about {{page}}"
    }
  },
  zh_CN: {
    translation: {
      "note in page": "网页笔记",
      "paper": "文稿",
      "setting": "设置",
      "donation for us": "赞赏",
      "follow us in wechat":"关注微信公众号",
      "Rate for PAGENOTE":"为 PAGENOTE 评分",
      "feature in future":"功能规划",
      "system monitor, report a bug":"系统健康监测、日志；反馈bug",
      "Release Notes":"更新日志",
      "By Tags":"按标签分组",
      "By Domain":"按域名分组",
      "By Time":"按日期分组",
      "Muilt-Page: select muilt-page once time. Single-Page: Only one page can be selected once time":"多选模式：一次可以选择多个PAGE浏览、操作；专注模式：一次只可选中一个PAGE浏览",
      "muilt-page":"多选模式",
      "single-page":"专注模式",
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
      "invite code":"邀请码"


    }
  }
};

let initLang = localStorage.getItem('lang');
if(['zh_CN','zh_TW',"zh"].includes(initLang)){
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
