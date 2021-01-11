import React, {Component} from 'react'

export default class SettingRender extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.location.href = '/me#/setting'
  }

  render() {
    return (
      <div className='setting-page'>
       redirect
      </div>
    )
  }
}
