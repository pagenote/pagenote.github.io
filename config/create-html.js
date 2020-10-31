const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getPath = require("./get-path");
let htmlArr = [];
function createHtml(page_path){
	getPath(page_path).map((item)=>{
		let infoJson ={},infoData={};
		try{
			// 读取pageinfo.json文件内容，如果在页面目录下没有找到pageinfo.json 捕获异常
			infoJson = fs.readFileSync(`${page_path}/${item}/pageinfo.json`,"utf-8");//
			infoData = JSON.parse(infoJson);
			// const page = require(`${page_path}/${item}/index.js`);
			// console.log(page,'===============');
			// infoData = page.pageInfo || {};
		}catch(err){
			console.log(err)
			infoData = {};
		}
		htmlArr.push(new HtmlWebpackPlugin({
			title:infoData.title ? infoData.title : "PAGENOTE,小而美的笔记工具",
			meta:{
				keywords: infoData.keywords ? infoData.keywords : "PAGENOTE,笔记,标记,高亮关键字",
				description:infoData.description ? infoData.description : "在任意网站上标记关键词，批注笔记"
			},
			chunks:[`${item}/${item}`], //引入的js
			template: "./src/template.html",
			filename : item === "index" ? "index.html" : `${item}/index.html`, //html位置
			minify:{//压缩html
				collapseWhitespace: true,
				preserveLineBreaks: true
			},
		}));
	});
	return htmlArr;
}


module.exports = createHtml;
