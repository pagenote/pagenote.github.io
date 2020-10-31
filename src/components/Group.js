import Expand from "../assets/icon/more.svg";
import PageItem from "./PageItem";
import React,{Fragment} from "react";
import ColorHash from 'color-hash';

const colorHash = new ColorHash();

export default function Group({group,toggleExpandGroup,groupPagesObject,selectedPagesKey,selectPage,expand}) {
  const color = colorHash.hex(group);
  const matched= (groupPagesObject[group]||{}).matched;
  return(
    <Fragment>
      {
        groupPagesObject[group] &&
        <div className={`group-container ${matched?'':'no-items'}`}>
          <div className='group-title'
             onClick={() => toggleExpandGroup(group)}>
              <span className='group-title-name' style={{borderColor:color}}>
                  {group}
                <Expand
                  width={12} height={12}
                  className={`group-icon ${expand ? 'expand' : 'collapse'}`}
                  onClick={() => toggleExpandGroup(group)}/>
              </span>
            <span className='group-info'>{groupPagesObject[group] ? groupPagesObject[group].pages.length : 0}</span>
          </div>
          <div
            className={`group-items ${expand ? 'expand' : 'collapse'}`}>
            {
              groupPagesObject[group] &&
              (!expand ? groupPagesObject[group].pages.slice(0, 0) : groupPagesObject[group].pages).map((page, index) => (
                (page.matched !== false && page.url) ?
                  <PageItem key={page.url}
                            active={selectedPagesKey.has(page.url)}
                            page={page}
                            group={group}
                            onSelect={selectPage}/>
                  : null
              ))
            }
          </div>
        </div>
      }
    </Fragment>

  )
}
