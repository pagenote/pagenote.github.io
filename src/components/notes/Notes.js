import React, { Fragment} from 'react'
import SelectOne from "../../assets/draw/selecte_one.svg";
import NoteIcon from "../../assets/icon/notes.svg";
import PageDetail from "./PageDetail";


export default function Notes({selectedPagesKey,size,categories,onSavePage,selectPage,data,isPopUp}) {
  return (
    //  ${isPopUp?"ispopup":""}
    <section className={`notes`} style={{width:`calc(100% - ${size})`}}>
      <div className='title'>
                                        <span className='logo-title'>
                                            NOTES <NoteIcon className='icon' />
                                        </span>
      </div>
      <div className='content'>
        {
          selectedPagesKey.size === 0 &&
          <div className='empty-tip'>
            <div>
              在左侧点击选中page，查看详情、编辑
            </div>
            <SelectOne width={230} height={175}/>
          </div>
        }
        {
          Array.from(selectedPagesKey).map((pageKey)=>(
            <Fragment key={pageKey}>
              {
                data[pageKey]?
                  <PageDetail
                    categories={categories}
                               onSelectPage={selectPage}
                               selectedPage={data[pageKey]}
                               onSavePage={onSavePage} data={data}/>:
                   <div className='empty-tip'>
                     无相关数据
                     <div>
                       {pageKey}
                     </div>
                   </div>
              }
            </Fragment>
          ))
        }
      </div>
    </section>
  )
};
