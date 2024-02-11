import React, { useState } from 'react';

function AddTodoForm({ addItem }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default AddTodoForm;