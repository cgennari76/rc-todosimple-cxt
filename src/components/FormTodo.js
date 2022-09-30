import React, {
  useState,
  useReducer,
} from 'react';
import { v4 as uuid } from 'uuid';
import Filter from './Filter';
import TodoList from './TodoList';

import TodoContext from '../context/TodoContext';
import FilterContext from '../context/FilterContext';
import todoReducer from '../reducer/TodoReducer';
import filterReducer from '../reducer/FilterReducer';

const initalTodos = [
  {
    id: uuid(),
    task: 'testing...',
    complete: true,
  },
];

const FormTodo = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initalTodos);

  const [card, setCard] = useState({
    id: uuid(),
    name: "",
    email: "",
    status: "",
    complete: false
  });

  const handleChangeInput = event => {
    const value = event.target.value
      setCard({
        ...card,
        [event.target.name]: value
    });
  };

  const handleSubmit = event => {
    if (card) {
      dispatchTodos({ type: 'ADD_TODO', card });
    }

    setCard({
      id: uuid(),
      name: "",
      email: "",
      status: "",
      complete: false
    });

    event.preventDefault();
  };

  return (
  <TodoContext.Provider value={{todos, dispatchTodos}}>
    <FilterContext.Provider value={{filter, dispatchFilter}}>
      <Filter />
      <TodoList />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
          <input type="text" name="name" value={card.name} onChange={handleChangeInput} />
        <label>Email</label>
          <input type="text" name="email" value={card.email} onChange={handleChangeInput} />
        <label>Status</label>
          <input type="text" name="status" value={card.status} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </FilterContext.Provider>
  </TodoContext.Provider>
  );
};

export default FormTodo;
