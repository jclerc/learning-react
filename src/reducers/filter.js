/* @flow */

import * as actions from '../actions'

export default (state = actions.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}
