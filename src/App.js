import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]); // State for the list of items
  const [inputValue, setInputValue] = useState(''); // State for the input field

  // Handle adding an item to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== '') { // Check if input is not empty
      setItems([...items, inputValue]); // Add new item to the list
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="app-container">
      <h1>Dynamic List Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-message"></p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;