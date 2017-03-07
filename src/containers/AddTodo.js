import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatchAdd }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (input.value.trim()) {
            dispatchAdd(input.value)
          }
          input.value = ''
          input.focus()
        }}
      >
        <label htmlFor="input-task">Add a new task</label>
        <input
          id="input-task"
          className="inline" ref={node => {
            input = node
          }}
        />
        <button className="inline" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = { dispatchAdd: addTodo }

export default connect(null, mapDispatchToProps)(AddTodo)
