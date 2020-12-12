import React from "react";
import Expand from "../../../../assets/icon/more.svg";
import PageItem from "./PageItem";
import ColorHash from 'color-hash';

const colorHash = new ColorHash();

export default function Group({group,expand,activePageKeys,toggleExpandGroup,selectPage}) {

  const pages = group.pages || [];
  const label = group.label || 'default'

  const color = colorHash.hex(label);
  return(
    <div className={`group-item`}>
      <div className='group-title'
           onClick={() => toggleExpandGroup(label)}>
            <span className='group-title-name' style={{borderColor:color}}>
              {label}
              <span className='group-breif'>
                <span className='group-info'>{group.pages.length}</span>
                <Expand
                  width={12} height={12}
                  className={`group-icon ${expand ? 'expand' : 'collapse'}`}
                  onClick={() => toggleExpandGroup(label)}/>
              </span>
            </span>
      </div>
      <div className={`group-pages`}>
        {
          pages.map((page)=>(
            <PageItem key={page.url}
              active={activePageKeys.has(page.url)}
              page={page}
              onSelect={selectPage}/>
          ))
        }
      </div>
    </div>
  )
}
