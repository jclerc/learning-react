/* @flow */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo, changeTodo } from '../actions'
import Todo from './Todo'
import Loader from './Loader'

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      laoded: false
    }
    setTimeout(() => this.setState({ loaded: true }), 2000)
  }

  render() {
    if (!this.state.loaded) {
      return (
        <Loader />
      )
    } else {
      return (
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo
              key={index}
              {...todo}
              onToggleClick={() => this.props.toggleTodo(index)}
              onRemoveClick={() => this.props.removeTodo(index)}
              onChangeText={text => this.props.changeTodo(index, text)}
            />
          )}
        </ul>
      )
    }
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired), // Not required
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = ({ todos }) => ({ todos })

const mapDispatchToProps = { toggleTodo, removeTodo, changeTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
