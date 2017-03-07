
import React from 'react'
import { VisibilityFilters } from '../actions'
import Filter from './Filter'

const localeVisibilityFilters = {
  SHOW_ALL: 'Show All',
  SHOW_COMPLETED: 'Show Completed',
  SHOW_ACTIVE: 'Show Active',
}

const Filters = () => {
  return (<div>{
    Object.keys(VisibilityFilters).map(filter => (
      <Filter label={localeVisibilityFilters[filter]} key={filter} mode={filter} />
    ))
  }</div>)
}

export default Filters
