/* @flow */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from './Repo'
import Loader from './Loader'

class RepoList extends React.Component {

  render() {
    if (this.props.repos.loading) {
      return (
        <Loader />
      )
    }

    if (this.props.repos.data) {
      return (
        <ul>
          {this.props.repos.data
              .sort((a, b) => (b.stargazers_count - a.stargazers_count))
              .map((repo, index) =>
            <Repo
              key={index}
              {...repo}
            />,
          )}
        </ul>
      )
    }

    return (
      <p>Search an user above.</p>
    )
  }
}

RepoList.propTypes = {
  repos: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.array,
  }).isRequired,
}

const mapStateToProps = ({ repos }) => ({ repos })

export default connect(mapStateToProps)(RepoList)
