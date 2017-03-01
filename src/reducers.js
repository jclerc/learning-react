/* @flow */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CHANGE_TODO } from './actions'
import { SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
        },
      ]
    case TOGGLE_TODO:
      return state.map((item, index) => {
        if (index === action.payload) {
          return Object.assign({}, item, { completed: !item.completed })
        }
        return item
      })
    case REMOVE_TODO:
      return state.filter((item, index) => index !== action.payload)
    case CHANGE_TODO:
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

const filter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  filter: filter(state.filter, action),
})

export default todoApp
