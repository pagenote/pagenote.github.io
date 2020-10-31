import React, {Fragment} from 'react';
export default function LoadPage({
   left,toggleGroups,groupKeys,selectedGroupsKey,expand,groupPagesObject,selectGroup
}) {
  return (
    <Fragment>
      <div className="tabs" style={{left: left + 'px'}}>
        <div>
          <label>
            <input type="checkbox" onChange={toggleGroups} checked={groupKeys.length===selectedGroupsKey.size}/>
          </label>
        </div>
        <div>
          {
            groupKeys.map((groupKey) => (
              <div title={groupKey} key={groupKey} className={`tab-item ${selectedGroupsKey.has(groupKey)?'active':''} ${expand?'expand':''} ${groupPagesObject[groupKey].matched>0?'show':'hide'}`}
                   onClick={()=>selectGroup(groupPagesObject[groupKey],groupKey)}>
                <span className='count'>{groupKey}</span>
              </div>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
}
