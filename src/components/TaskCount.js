/* @flow */

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

class TaskCount extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.count !== this.props.count || nextProps.all !== this.props.all
  }

  render() {
    return (
      <span style={{ fontWeight: 'normal' }}>
        <span>{this.props.count}/{this.props.all}</span>
      </span>
    )
  }

}

TaskCount.PropTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = ({ todos }) => ({
  count: todos.filter(todo => todo.completed).length,
  all: todos.length,
})

export default connect(mapStateToProps)(TaskCount)
