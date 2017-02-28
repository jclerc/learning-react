import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (input.value.trim()) {
          dispatch(addTodo(input.value))
        }
        input.value = ''
        input.focus()
      }}>
        <label>Add a new task</label>
        <input className="inline" ref={node => {
          input = node
        }} />
        <button className="inline" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
