import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TaskCount from './TaskCount'
import Clock from './Clock'
import Filters from './Filters'

const HomePage = () => (
  <div>
    <h3>Welcome!</h3>
    <p>Navigation is above 🙃</p>
  </div>
)

const TodoPage = () => (
  <div>
    <h3>Todo App</h3>
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

const ClockPage = () => (
  <div>
    <h3>Current time</h3>
    <p>It is currently: <b><Clock /></b></p>
  </div>
)

export { HomePage }
export { TodoPage }
export { ClockPage }
