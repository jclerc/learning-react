/* @flow */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, removeTodo, changeTodo } from '../actions'
import Todo from './Todo'
import Loader from './Loader'

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    setTimeout(() => {
      this.setState({ loaded: true })
      this.props.addTodo('Loaded async')
    }, 2000)
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
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = ({ todos, dispatch }) => ({ todos, dispatch })

const mapDispatchToProps = { toggleTodo, removeTodo, changeTodo, addTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
