import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
import TaskCount from '../components/TaskCount'
import Clock from '../components/Clock'

const App = () => (
  <div className="container">
    <h3>Todo App <Clock /></h3>
    <div className="group">
      <AddTodo />
    </div>
    <h3>Your tasks <TaskCount /></h3>
    <div className="group">
      <TodoList />
    </div>
  </div>
)

export default App
