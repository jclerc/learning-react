/* @flow */

import * as actions from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
        },
      ]
    case actions.TOGGLE_TODO:
      return state.map((item, index) => {
        if (index === action.payload) {
          return Object.assign({}, item, { completed: !item.completed })
        }
        return item
      })
    case actions.REMOVE_TODO:
      return state.filter((item, index) => index !== action.payload)
    case actions.CHANGE_TODO:
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return Object.assign({}, item, { text: action.payload.text })
        }
        return item
      })
    default:
      return state
  }
}
