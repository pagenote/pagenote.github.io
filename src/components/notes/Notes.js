import React, { Fragment} from 'react'
import SelectOne from "../../assets/draw/selecte_one.svg";
import NoteIcon from "../../assets/icon/notes.svg";
import PageDetail from "./PageDetail";

const version2Steps = ["x","y","id","text","tip","bg","time","isActive","offsetX","offsetY","parentW","pre","suffix"]
function upgradeStepInfoVersion1to2(pageData) {
  if(!pageData){
    return null
  } else if(pageData.version===1){
    try{
      const newSteps = [];
      pageData.steps.forEach((item)=>{
        if(Array.isArray(item)){
          const tempStep = {};
          item.forEach((value,keyIndex)=>{
            tempStep[version2Steps[keyIndex]] = value;
          });
          newSteps.push(tempStep);
        }else{
          newSteps.push(item);
        }
      });
      pageData.steps = newSteps;
      pageData.version = 2;
    }catch (e) {
      console.error('step 升级失败',e);
    }
  }
  return pageData;
}

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
          Array.from(selectedPagesKey).map((pageKey)=>{
            const pageData = upgradeStepInfoVersion1to2(data[pageKey]);
            return(
              <Fragment key={pageKey}>
              {
                pageData?
                  <PageDetail
                    categories={categories}
                    onSelectPage={selectPage}
                    selectedPage={pageData}
                    onSavePage={onSavePage}
                    data={data}/>:
                  <div className='empty-tip'>
                    无相关数据
                    <div>
                      {pageKey}
                    </div>
                  </div>
              }
            </Fragment>)
          })
        }
      </div>
    </section>
  )
};
