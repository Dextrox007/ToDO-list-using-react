import React, { useState } from 'react';
import './Todo.css'; 

function Todo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function addItem() {
    if (newItem !== "") {
      if (editIndex !== -1) {
        // Update existing item
        const updatedItems = [...items];
        updatedItems[editIndex] = newItem;
        setItems(updatedItems);
        setEditIndex(-1);
      } else {
        // Add new item
        setItems([...items, newItem]);
      }
      setNewItem("");
    }
  }

  function deleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  function editItem(index) {
    const itemToEdit = items[index];
    setNewItem(itemToEdit);
    setEditIndex(index);
  }

  return (
    <div className="todo-container" id="root">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          onChange={(event) => setNewItem(event.target.value)}
          value={newItem}
          type="text"
          placeholder="Add an Item"
        />
        <button onClick={addItem}>{editIndex !== -1 ? "Update" : "Add"}</button>
      </div>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
