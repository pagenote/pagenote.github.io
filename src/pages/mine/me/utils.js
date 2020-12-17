import {connectServer} from "@/utils/index_new";

export const gotoTarget=(key,side=[1,1])=>{

  if(side[0]){
    const leftElement = document.querySelector('.page-item[data-page="'+key+'"]')
    if(leftElement){
      // document.querySelector('.pages').scrollTop=leftElement.offsetTop - 40;
      gotoPosition(document.querySelector('.pages'),0,leftElement.offsetTop - 40)
    }
  }
  if(side[1]){
    const rightElement = document.querySelector('.web-page-item[data-page="'+key+'"]');
    if(rightElement){
      // document.querySelector('.notes').scrollTop = rightElement.offsetTop - 40;
      gotoPosition(document.querySelector('.notes'),0,rightElement.offsetTop - 40)
    }
  }
}

const documentTarget = document.documentElement;
function getScroll(container){
  var x = container.scrollLeft || window.pageXOffset || documentTarget.scrollLeft || documentTarget.scrollLeft;
  var y = container.scrollTop || window.pageYOffset || documentTarget.scrollTop || documentTarget.scrollTop;
  return {x,y}
}

function gotoPosition(container,targetX,targetY,callback){
  const timer = setInterval(function () {
    //移动前
    const { x:beforeScrollLeft,y:beforeScrollTop} = getScroll(container);
    const distanceX = targetX - beforeScrollLeft
      , distanceY =  targetY - beforeScrollTop

    //移动后
    setScroll(beforeScrollLeft+distanceX/6,beforeScrollTop+distanceY/6)

    const {x:afterScrollLeft,y:afterScrollTop} = getScroll(container)

    if(beforeScrollTop === afterScrollTop && beforeScrollLeft === afterScrollLeft){
      clearInterval(timer)
      typeof callback === "function" && callback()
    }
  },30)
  function setScroll(x,y){
    container.scrollLeft = x;
    container.scrollTop = y;
  }
}
