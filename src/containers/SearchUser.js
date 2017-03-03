import React from 'react'
import { connect } from 'react-redux'
import { repos } from '../actions'
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
    this.props.repos(
      fetch('https://api.github.com/users/' + name + '/repos')
        .then(response => response.json())
    )
  }

}

const mapDispatchToProps = { repos }

export default connect(null, mapDispatchToProps)(SearchUser)
