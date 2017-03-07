import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SearchUser from '../containers/SearchUser'
import TaskCount from './TaskCount'
import Clock from './Clock'
import Filters from './Filters'
import RepoList from './RepoList'
import GistList from './GistList'
import Gist from './Gist'

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

const GithubPage = () => (
  <div>
    <h3>Username</h3>
    <div className="group">
      <SearchUser />
    </div>
    <h3>Repos</h3>
    <div className="group">
      <RepoList />
    </div>
  </div>
)

const ClockPage = () => (
  <div>
    <h3>Current time</h3>
    <p>It is currently: <b><Clock /></b></p>
  </div>
)

const GistsPage = () => (
  <div>
    <h3>Gists</h3>
    <div className="group">
      <GistList />
    </div>
  </div>
)

const GistPage = ({ match }) => (
  <div>
    <h3>Gist</h3>
    <div className="group">
      <Gist match={match} />
    </div>
  </div>
)

export { HomePage }
export { TodoPage }
export { ClockPage }
export { GithubPage }
export { GistsPage }
export { GistPage }
