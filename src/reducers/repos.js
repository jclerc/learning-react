/* @flow */

import * as actions from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case actions.REPOS_PENDING:
      return Object.assign({}, state, {
        loading: true,
      })
    case actions.REPOS_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
      })
    case actions.REPOS_REJECTED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      })
    default:
      return state
  }
}
