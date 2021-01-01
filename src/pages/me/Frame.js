import React from 'react'
import './frame.scss'
export const Frame=function({children}){
  return(
    <div className='frame'>
      {children}
    </div>
  )
}

export const Left = function ({children,width}){
  width = width<1?width*100+'%':width+'px';
  return(
    <div className='left' style={{width:width}}>
      {children}
    </div>
  )
}

export const Right = function ({children}){
  return(
    <div className="right">
      {children}
    </div>
  )
}
