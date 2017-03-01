import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo, changeTodo } from '../actions'
import Todo from './Todo'

let TodoList = ({ todos, toggleTodo, removeTodo, changeTodo }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onToggleClick={() => toggleTodo(index)}
        onRemoveClick={() => removeTodo(index)}
        onChangeText={text => changeTodo(index, text)}
      />,
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = ({ todos }) => ({ todos })

const mapDispatchToProps = { toggleTodo, removeTodo, changeTodo }

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)

export default TodoList
