import React from 'react'
import { connect } from 'react-redux'
import 'whatwg-fetch'
import { repos } from '../actions'

class SearchUser extends React.Component {

  render() {
    let input

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (input.value.trim()) {
              this.fetchRepos(input.value)
            }
            input.focus()
          }}
        >
          <label htmlFor="input-search">Search an user</label>
          <input
            id="input-search"
            className="inline" ref={node => {
              input = node
            }}
          />
          <button className="inline" type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }

  fetchRepos(name) {
    this.props.repos(new Promise((cb, err) => {
      fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => {
          if (response.status < 200 || response.status >= 300) {
            err('Wrong HTTP status')
          }
          return response
        })
        .then(response => cb(response.json()))
        .catch(ex => err(ex))
    }))
  }

}

const mapDispatchToProps = { repos }

export default connect(null, mapDispatchToProps)(SearchUser)
