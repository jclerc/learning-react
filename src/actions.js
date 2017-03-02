/* @flow */

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REQUEST_REPOS = 'REQUEST_REPOS'
export const FETCH_REPOS = 'FETCH_REPOS'
export const FAIL_REPOS = 'FAIL_REPOS'

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
})

export const removeTodo = (index: number) => ({
  type: REMOVE_TODO,
  payload: index,
})

export const toggleTodo = (index: number) => ({
  type: TOGGLE_TODO,
  payload: index,
})

export const changeTodo = (index: number, text: string) => ({
  type: CHANGE_TODO,
  payload: { index, text },
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter,
})

export const requestRepos = () => ({
  type: REQUEST_REPOS,
  payload: null,
})

export const fetchRepos = (repos) => ({
  type: FETCH_REPOS,
  payload: repos,
})

export const failRepos = (error) => ({
  type: FAIL_REPOS,
  payload: error,
})
