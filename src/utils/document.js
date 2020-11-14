// rgba(12,323,456) #123222
function convertColor(color='') {
  if(!color){
    return '#000000';
  }
  let rgb = [];
  let rate = 1;
  if(color.indexOf('rgb')>-1){
    rgb = color.match(/\((.*)\)/)[1].split(',');
    rgb = [parseInt(rgb[0]),parseInt(rgb[1]),parseInt(rgb[2])];
    if(rgb[3]!==undefined){
      rate = rgb[3];
    }
  }else{
    color = color.replace('#','');
    rgb = [color.substr(0,2),color.substr(2,2),color.substr(4,2),1]
    rgb = [parseInt(rgb[0],16),parseInt(rgb[1],16),parseInt(rgb[2],16)];
  }
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  const Y = (0.3*r + 0.59*g + 0.11*b)*Math.min(rate,1);
  return {
    rgb: rgb,
    textColor: Y >= 180 ? '#000000' : '#ffffff'
  };
}

function computePosition(index,radio=20) {
  const p = 45//360/(colors.length-1);
  const hudu = -(2 * Math.PI / 360) * p * index;
  const x =  Number.parseFloat(radio * Math.sin(hudu)).toFixed(3);
  const y = Number.parseFloat(radio * Math.cos(hudu)).toFixed(3);
  return {
    x:-x,
    y:-y,
  }
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

function getBrowserTypeAndVersion() {
  const  userAgent = window.navigator.userAgent;
  let type = '';
  let version = '';
  const matchEdge = userAgent.match(/(Edg|Edge)\/((\d{1,}.)+)/);
  const matchChrome= userAgent.match(/(Chrome)\/((\d{1,}.)+)/);
  const matchOPR= userAgent.match(/(OPR)\/((\d{1,}.)+)/);
  const matchFirefox= userAgent.match(/(Firefox)\/((\d{1,}.*)+)/);
  const matchIE= userAgent.match(/(MSIE)\s(\d{1,}\.\d)/);
  const matchIE11= userAgent.match(/(rv):(\d{1,}\.\d)/);
  const matchSafari = userAgent.match(/(Safari)\/(\d{1,}.*)/);
  if (matchEdge) {
    type = 'Edge';
    version = matchEdge[2];
  } else if (matchFirefox) {
    type = matchFirefox[1];
    version = matchFirefox[2];
  } else if (matchOPR) {
    type = matchOPR[1];
    version = matchOPR[2];
  }  else if (matchIE) {
    type = 'IE';
    version = matchIE[2];
  } else if (matchIE11) {
    type = 'IE';
    version = matchIE11[2];
  } else if (matchChrome) {
    type = matchChrome[1];
    version = matchChrome[2];
  } else if(matchSafari){
    type = 'Safari';
    version = matchSafari[2];
  }
  return {
    type,
    version
  };
}

export {
  convertColor,
  computePosition,
  funDownload,
  getBrowserTypeAndVersion,
}
