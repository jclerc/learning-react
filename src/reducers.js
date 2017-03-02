/* @flow */

import * as actions from './actions'

const todos = (state = [], action) => {
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

const filter = (state = actions.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

const repos = (state = {}, action) => {
  switch (action.type) {
    case actions.REQUEST_REPOS:
      return Object.assign({}, state, {
        loading: true,
      })
    case actions.FETCH_REPOS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
      })
    case actions.FAIL_REPOS:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      })
    default:
      return state
  }
}

const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  filter: filter(state.filter, action),
  repos: repos(state.repos, action)
})

export default todoApp
