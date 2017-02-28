import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import Todo from './Todo'

let TodoList = ({ todos, onToggleClick, onRemoveClick }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onToggleClick={() => onToggleClick(index)}
        onRemoveClick={() => onRemoveClick(index)}
      />,
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onRemoveClick: (id) => {
      dispatch(removeTodo(id))
    },
  }
}

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)

export default TodoList
