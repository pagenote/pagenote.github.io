import {Input} from "antd";
import React from "react";
import debounce from 'lodash/debounce'
import './search-filter.scss'

const { Search } = Input;

export default function SearchFilter({onSearch}){
  return (
    <div className='search-filter'>
      <Input
        placeholder="🔍"
        allowClear
        onChange={(e)=>onSearch(e.target.value)}
        // onSearch={onSearch}
      />
    </div>
  )
}
