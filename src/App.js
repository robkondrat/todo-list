import React from 'react';
import './App.js';

import Header from "./Header";
import data from "./data.json";

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App;