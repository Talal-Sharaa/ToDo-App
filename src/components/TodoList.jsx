import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header';
import TodoItem from './TodoItem';
import ToggleButton from './ToggleButton';
import AddTodoForm from './AddTodoForm';
import './TodoList.css';

function TodoList() {
  const [sortByStatus, setSortByStatus] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, label: "Learn VueJs", done: true },
    { id: 2, label: "Code a todo list", done: false },
    { id: 3, label: "Learn something else", done: false },
  ]);

  const addItem = (item) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 9999) + 10,
        label: item,
        done: false,
      },
    ]);
  };

  const markAsDoneOrUndone = (item) => {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteItemFromList = (item) => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  const handleToggle = (active) => {
    setSortByStatus(active);
  };

  const sortedTodos = sortByStatus
    ? [...todos].sort((a, b) => a.done - b.done)
    : todos;

  return (
    <main id="todolist">
      <Header />
      <TransitionGroup component="ul">
        {sortedTodos.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <TodoItem
              item={item}
              markAsDoneOrUndone={markAsDoneOrUndone}
              deleteItemFromList={deleteItemFromList}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <ToggleButton label="Move done items at the end?" name="todosort" onToggle={handleToggle} />
      <AddTodoForm addItem={addItem} />
    </main>
  );
}

export default TodoList;