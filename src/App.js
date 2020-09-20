import React, { useState } from 'react';
import './App.css';

function App() {
  const[todos, setTodos] = useState(['Go buy banana', 'Take out the trash', 'I have to be more tenacious!']);
  const[input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    //this will fire off when we click the button!
    event.preventDefault(); // Will stop the REFRESHING
    console.log('This works');
    setTodos([...todos, input])
    setInput(''); // clear up the input after hitting submit
  }


  return (
    <div className="App">
      <h1>Hello Le Singe 🐒!</h1>
      <form>
      <input value={input} onChange ={event => setInput(event.target.value)}/>
      <button type={"submit"} onClick={addTodo}> Add to list </button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
