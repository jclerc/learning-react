
import React, { PropTypes } from 'react'

const TodoText = (props) => (
  <input
    className="inline seamless small"
    style={{
      textDecoration: props.completed ? 'line-through' : 'none',
    }}

    value={props.text}

    onChange={e => props.onChangeText(e.target.value)}
  />
)

TodoText.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

export default TodoText
