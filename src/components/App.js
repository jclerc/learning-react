import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TaskCount from '../components/TaskCount'
import Clock from '../components/Clock'
import Filters from '../components/Filters'

const App = () => (
  <div className="container">
    <h3>Todo App <Clock /></h3>
    <div className="group">
      <AddTodo />
    </div>
    <h3>Your tasks <TaskCount /></h3>
    <div className="group">
      <VisibleTodoList />
    </div>
    <h3>Filter</h3>
    <Filters />
  </div>
)

export default App
