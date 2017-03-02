import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ addTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (input.value.trim()) {
          addTodo(input.value)
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

const mapDispatchToProps = { addTodo }

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
