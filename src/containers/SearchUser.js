import React from 'react'
import { connect } from 'react-redux'
import { requestRepos, fetchRepos, failRepos } from '../actions'
import 'whatwg-fetch'

class SearchUser extends React.Component {

  render() {
    let input

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (input.value.trim()) {
            this.fetchRepos(input.value)
          }
          input.focus()
        }}>
          <label>Search an user</label>
          <input className="inline" ref={node => {
            input = node
          }} />
          <button className="inline" type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }

  fetchRepos(name) {
    this.props.requestRepos()
    fetch('https://api.github.com/users/' + name + '/repos')
      .then(response => response.json())
      .then(body => this.props.fetchRepos(body))
      .catch(ex => this.props.failRepos(ex.getMessage()))
  }

}

const mapDispatchToProps = { requestRepos, fetchRepos, failRepos }

export default connect(null, mapDispatchToProps)(SearchUser)
