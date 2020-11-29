import Expand from "../assets/icon/more.svg";
import PageItem from "./PageItem";
import React,{Fragment} from "react";
import ColorHash from 'color-hash';
import MarkDownIcon from "../assets/icon/markdown.svg";
import {exportMd} from "../utils";

const colorHash = new ColorHash();

export default function Group({group,toggleExpandGroup,groupPagesObject,selectedPagesKey,selectPage,expand}) {
  const color = colorHash.hex(group);
  const matched= (groupPagesObject[group]||{}).matched;

  const exportAllMd = function (e){
    e.stopPropagation();
    const pages = groupPagesObject[group].pages;
    console.log(pages)
    exportMd(pages)
  }

  return(
    <Fragment>
      {
        groupPagesObject[group] &&
        <div className={`group-container ${matched?'':'no-items'}`}>
          <div className='group-title'
             onClick={() => toggleExpandGroup(group)}>
              <span className='group-title-name' style={{borderColor:color}}>
                  {group}

                  <span className='action-bar'>
                    <span data-tip='导出全组为markdown' onClick={exportAllMd}><MarkDownIcon width={24} height={24} /></span>
                  </span>
                  <span className='group-breif'>

                    <span className='group-info'>{groupPagesObject[group] ? groupPagesObject[group].pages.length : 0}</span>
                    <Expand
                      width={12} height={12}
                      className={`group-icon ${expand ? 'expand' : 'collapse'}`}
                      onClick={() => toggleExpandGroup(group)}/>
                  </span>
              </span>

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
