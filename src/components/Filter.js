
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const Filter = ({ label, mode, filter, dispatchVisibility }) => {
  return (
    <button
      className={`medium ${filter === mode ? 'active' : ''}`}
      onClick={() => dispatchVisibility(mode)}
    >
      {label}
    </button>
  )
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
}

const mapStateToProps = ({ filter }) => ({ filter })

const mapDispatchToProps = { dispatchVisibility: setVisibilityFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)
