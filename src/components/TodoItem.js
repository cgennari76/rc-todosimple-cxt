import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatchTodos } = useContext(TodoContext);

  const handleChange = () =>
    dispatchTodos({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        Super Hero:
      </label>
      <p>{todo.name}</p>
      <p>{todo.email}</p>
      <p>{todo.status}</p>
    </li>
  );
};

export default TodoItem;
