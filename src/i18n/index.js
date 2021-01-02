import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "note in page": "Notes in Page",
      "paper": "Paper",
      "setting": "Setting"
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
      "Sort By Tags":"按标签分组",
      "Sort By Domain":"按域名分组",
      "Sort By Time":"按日期分组",
      "Muilt-Page: select muilt-page once time. Single-Page: Only one page can be selected once time":"多选模式：一次可以选择多个PAGE浏览、操作；专注模式：一次只可选中一个PAGE浏览",
      "muilt-page":"多选模式",
      "single-page":"专注模式",
      "remove selected":"清空选中",
      "select a page on the left side":"请在左侧选择 PAGE 后查看",
      "confirm delete?":"确定删除?"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
