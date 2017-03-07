/* @flow */

import * as actions from '../actions'

let counter = 1

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: counter += 1,
          text: action.payload,
          completed: false,
        },
      ]
    case actions.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return Object.assign({}, item, { completed: !item.completed })
        }
        return item
      })
    case actions.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload)
    case actions.CHANGE_TODO:
      return state.map(item => {
        if (item.id === action.payload.index) {
          return Object.assign({}, item, { text: action.payload.text })
        }
        return item
      })
    default:
      return state
  }
}
