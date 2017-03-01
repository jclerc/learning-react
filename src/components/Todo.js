/* @flow */

import React, { PropTypes } from 'react'
import TodoText from './TodoText'

const Todo = ({ onToggleClick, onRemoveClick, onChangeText, completed, text }) => (
  <li>
    <TodoText text={text} completed={completed} onChangeText={onChangeText} />
    <button className="small" onClick={onToggleClick}>
      { completed ? 'Undone' : 'Done' }
    </button>
    <button className="small" onClick={onRemoveClick}>
      Delete
    </button>
  </li>
)

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
