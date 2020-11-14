import React from 'react';

const colors = ['#426666','#fff4e1','#e7e6e1','#aacfd0','#a9d2ff']//['rgb(243, 241, 239)','#aacfd0','rgb(51, 81, 82)'];
export default function Colors({onChoose}) {
    return(
        <div>
            <style jsx='true'>{`
                .color-item{
                    display:inline-block;
                    width:20px;
                    height:20px;
                    border-radius: 20px;
                    margin-right: 4px;
                    cursor:pointer;
                    border: 1px solid #fff;
                }
               
              `}</style>
            {
                colors.map((color)=>(
                    <span key={color} onClick={()=>{onChoose(color)}} className='color-item' style={{backgroundColor:color}}></span>
                ))
            }
        </div>
    )
}
