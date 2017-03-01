
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.filter),
  }
}

const VisibleTodoList = connect(mapStateToProps)(TodoList)

export default VisibleTodoList
