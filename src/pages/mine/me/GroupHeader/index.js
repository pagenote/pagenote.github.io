import PagesIcon from "../../../../assets/icon/pages.svg";
import DropMenu from "../../../../components/DropMenu";
import Close from "../../../../assets/icon/close.svg";

export default function ({}){
  return(
    <div className='title'>
      <a className='logo-title' href='/'>
        PAGES<PagesIcon width={20} height={20} className='icon'/>
      </a>
      {/*<div className='group-type'>*/}
      {/*  <DropMenu list={groupTypes} selected={groupType}*/}
      {/*            onSelect={this.selectGroupType}/>*/}
      {/*</div>*/}
      <input onChange={this.search} value={searchString}
             className={`search ${searchString ? 'active' : ''}`} type="text"
             placeholder='🔍'/>
      <Close className='clean-search' onClick={this.cleanSearch} />
    </div>
  )
}
