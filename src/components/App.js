import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { HomePage, TodoPage, ClockPage } from './Pages'

const App = () => (
  <Router>
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <span>-</span>
        <li><Link to="/todo">TodoList</Link></li>
        <span>-</span>
        <li><Link to="/clock">Clock</Link></li>
      </ul>

      <div className="container">
        <Route exact path="/" component={HomePage}/>
        <Route path="/todo" component={TodoPage}/>
        <Route path="/clock" component={ClockPage}/>
      </div>
    </div>
  </Router>
)

export default App
