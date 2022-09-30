import { useContext } from 'react';
import TodoItem from './TodoItem'
import TodoContext from '../context/TodoContext';
import FilterContext from '../context/FilterContext';

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }

    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }

    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }

    return false;
  });
  
  return(
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
