import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { HomePage, TodoPage, GithubPage, ClockPage, GistsPage, GistPage } from './Pages'

const App = () => (
  <Router>
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">TodoList</Link></li>
        <li><Link to="/github">Github</Link></li>
        <li><Link to="/clock">Clock</Link></li>
        <li><Link to="/gists">Gist</Link></li>
      </ul>

      <div className="container">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/todo" component={TodoPage}/>
        <Route exact path="/github" component={GithubPage}/>
        <Route exact path="/clock" component={ClockPage}/>
        <Route exact path="/gists" component={GistsPage}/>
        <Route path="/gist/:gistOwner/:gistName" component={GistPage}/>
      </div>
    </div>
  </Router>
)

export default App
