
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import TodoList from '../components/TodoList'

const getFilter = ({ filter }) => filter
const getTodos = ({ todos }) => todos

const filterTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  },
)

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state),
  }
}

const VisibleTodoList = connect(mapStateToProps)(TodoList)

export default VisibleTodoList
