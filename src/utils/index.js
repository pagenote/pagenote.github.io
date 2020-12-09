export function isLow(current='',compareVersion='',separator='.') {
    if(current===compareVersion){
        return false;
    }
    const firstVersion = current.split(separator);
    const secondVersion = compareVersion.split(separator);
    let isOld = true;
    for(let i=0; i<secondVersion.length; i++) {
        const preVersion = parseInt(firstVersion[i]);
        const nexVersion = parseInt(secondVersion[i]);
        if(preVersion!==nexVersion){
            isOld = preVersion<nexVersion;
            break;
        }
    }
    return isOld;
}

export function exportMd(pages=[]) {
    let content = '';
    let markCount = 0;
    if(pages.length===0) return;
    pages.forEach((page)=>{
        const steps = page.steps;
        const url = page.url;
        const title = page.title || url;
        content += `## [${title}](${url})\n`;

        steps.forEach((step)=>{
            // const recordInfo = [step[0],step[1],step[2]];
            const time = new Date(step.time).toLocaleDateString();
            const refer = step.text;
            let note = step.tip;
            note = note.replace(/<br>|<\/br>/g,'\n');
            // const id = step.id;
            if(note!==refer){
                content += `${note}\n`;
            }
            content += `> ${refer}\n\n`; // [${time}](${recordInfo})
            markCount++
        });
        content += '\n';
    });
    content +='## [标记统计](https://pagenote.cn/me)\n';
    content +='| 页面数 | 标记数 | 平均标记/页面 |\n';
    content +='| :--- | :---| :--- |\n';
    content +=`| ${pages.length}  | ${markCount} |  ${Math.round(markCount/pages.length)}   |\n`;

    const name = `pagenote[${markCount}lights]`;
    funDownload(content, name+'.md');
}

var funDownload = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};
