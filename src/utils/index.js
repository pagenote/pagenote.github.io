export function isLow(current,compareVersion,splitor='.') {
    if(!current){
        return true;
    }
    if(current===compareVersion){
        return false;
    }
    const firstVersion = current.split('.');
    const secondVersion = compareVersion.split('.');
    let isOld = false;
    for(let i=0; i<secondVersion.length; i++) {
        const preVersion = parseInt(firstVersion[i]);
        const nexVersion = parseInt(secondVersion[i]);
        if(preVersion<nexVersion){
            isOld = true;
            break;
        }
    }
    return isOld;
}