/* @flow */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Repo from './Repo'
import Loader from './Loader'

const RepoList = (props) => {
  if (props.repos.loading) {
    return (
      <Loader />
    )
  }

  if (props.repos.data) {
    return (
      <ul>
        {props.repos.data
            .sort((a, b) => (b.stargazers_count - a.stargazers_count))
            .map(repo =>
              <Repo
                key={repo.id}
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

RepoList.propTypes = {
  repos: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.array,
  }).isRequired,
}

const mapStateToProps = ({ repos }) => ({ repos })

export default connect(mapStateToProps)(RepoList)
