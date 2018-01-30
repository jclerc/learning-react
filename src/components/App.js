import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

import { HomePage, TodoPage, GithubPage, ClockPage, GistsPage, GistPage } from './Pages'

const App = ({ base }) => (
  <Router>
    <div>
      <ul className="nav">
        <li><Link to={`${base}/`}>Home</Link></li>
        <li><Link to={`${base}/todo`}>TodoList</Link></li>
        <li><Link to={`${base}/github`}>Github</Link></li>
        <li><Link to={`${base}/clock`}>Clock</Link></li>
        <li><Link to={`${base}/gists`}>Gist</Link></li>
      </ul>

      <div className="container">
        <Switch>
          <Route path={`${base}`}>
            <Switch>
              <Route exact path={`${base}/todo`} component={TodoPage} />
              <Route exact path={`${base}/github`} component={GithubPage} />
              <Route exact path={`${base}/clock`} component={ClockPage} />
              <Route exact path={`${base}/gists`} component={GistsPage} />
              <Route path={`${base}/gist/:gistOwner/:gistName`} component={GistPage} />
              <Route component={HomePage} />
            </Switch>
          </Route>
          <Route render={() => <Redirect to={`${base}/`} />} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App
