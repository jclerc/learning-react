/* @flow */

import React, { PropTypes } from 'react'

const Todo = ({ onToggleClick, onRemoveClick, completed, text }) => (
  <li>
    <span
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </span>
    <button className="inline" onClick={onToggleClick}>
      Done
    </button>
    <button className="inline" onClick={onRemoveClick}>
      Delete
    </button>
  </li>
)

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
