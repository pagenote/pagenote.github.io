import React,{Component} from "react";
import Group from "./GroupItem";
import './groups.scss'

export default class Groups extends Component{
  constructor(props) {
    super(props);
    this.state={
      expandGroups: new Set(),
    }
  }

  toggleExpandGroup=(group)=>{
    const {expandGroups} = this.state;
    expandGroups.has(group)?expandGroups.clear(group):expandGroups.add(group);
    this.setState({
      expandGroups
    })
  }


  render() {
    const {groups=[],selectedPageKeys,selectPage} = this.props;
    const {expandGroups} = this.state;
    return (
      <div className='groups'>
        {
          groups.map((group)=>(
            <Group
              key={group.label}
              group={group}
              expand={expandGroups.has(group.label)}
              activePageKeys={selectedPageKeys}
              toggleExpandGroup={this.toggleExpandGroup}
              selectPage={selectPage}
            />
          ))
        }
      </div>
      )
  }
}
