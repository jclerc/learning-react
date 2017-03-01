
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const Filter = ({ label, mode, setVisibilityFilter }) => {
  return (
    <button
      className="medium"
      onClick={() => setVisibilityFilter(mode)}
    >
      {label}
    </button>
  )
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
}

const mapDispatchToProps = { setVisibilityFilter }

export default connect(
  null,
  mapDispatchToProps,
)(Filter)
