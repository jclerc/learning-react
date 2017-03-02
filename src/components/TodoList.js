/* @flow */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, removeTodo, changeTodo } from '../actions'
import Todo from './Todo'
import Loader from './Loader'

class TodoList extends React.Component {

  state = {
    loaded: false,
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.timeout = setTimeout(() => {
        this.setState({ loaded: true })
      }, 2000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    if (!this.state.loaded) {
      return (
        <Loader />
      )
    }

    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo
            key={index}
            {...todo}
            onToggleClick={() => this.props.toggleTodo(index)}
            onRemoveClick={() => this.props.removeTodo(index)}
            onChangeText={text => this.props.changeTodo(index, text)}
          />,
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeTodo: PropTypes.func.isRequired,
}

const mapDispatchToProps = { toggleTodo, removeTodo, changeTodo, addTodo }

export default connect(
  null,
  mapDispatchToProps,
)(TodoList)
