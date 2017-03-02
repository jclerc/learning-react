import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { HomePage, TodoPage, GithubPage, ClockPage } from './Pages'

const App = () => (
  <Router>
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">TodoList</Link></li>
        <li><Link to="/github">Github</Link></li>
        <li><Link to="/clock">Clock</Link></li>
      </ul>

      <div className="container">
        <Route exact path="/" component={HomePage}/>
        <Route path="/todo" component={TodoPage}/>
        <Route path="/github" component={GithubPage}/>
        <Route path="/clock" component={ClockPage}/>
      </div>
    </div>
  </Router>
)

export default App
