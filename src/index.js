/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import promiseMiddleware from 'redux-promise-middleware'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { base } from './config'

// SSR
// import Express from 'express'
// import { match, RouterContext } from 'react-router'

import App from './components/App'
import todos from './reducers/todos'
import filter from './reducers/filter'
import repos from './reducers/repos'
import './index.css'

const networkInterface = createNetworkInterface({ uri: 'https://api.github.com/graphql' })

networkInterface.use([{
  applyMiddleware(req, next) {
    const request = Object.assign({}, req)
    const headers = { authorization: 'Bearer 6ac3eace1433fe012e00b8999f7f4539449da88f' }
    request.options.headers = Object.assign({}, req.options.headers, headers)
    next(request)
  },
}])

const client = new ApolloClient({ networkInterface })

const store = createStore(
  combineReducers({
    todos,
    filter,
    repos,
    apollo: client.reducer(),
  }),
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(promiseMiddleware(), client.middleware()),
    autoRehydrate(),
  ),
)

persistStore(store, { blacklist: ['repos', 'apollo'] })

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Provider store={store}>
      <App base={base} />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
)

/*
import { addTodo, toggleTodo } from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))

// Stop listening to state updates
unsubscribe()
*/
