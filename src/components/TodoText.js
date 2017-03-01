
import React, { PropTypes, Component } from 'react'

class TodoText extends Component {

  render() {
    return (
      <input className="inline seamless small"
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}

        value={this.props.text}

        onChange={e => this.props.onChangeText(e.target.value)}
      />
    )
  }
}

TodoText.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

export default TodoText
