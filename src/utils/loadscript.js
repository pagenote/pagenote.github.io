export default function loadScript(src,globalKey,callback) {
  if(window && window[globalKey]){
    typeof callback==='function' && callback();
    return;
  }else{
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = callback || function () {

    }
  }
}
