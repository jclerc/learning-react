/* @flow */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions'

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
    default:
      return state
  }
}

const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
})

export default todoApp
