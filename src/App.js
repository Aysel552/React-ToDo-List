import toDoList from "./toDoList.jpg"
import './App.css';
import planner from "./planner.jpg"
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <div className='App'>
      <div className="container">
        <img src={toDoList} alt="to-to-list" width="400px" height="400px"/>
      </div>
      <div className="container">
      <h1>To-Do List</h1>
      </div>
    <ToDoList />
      <div className="container">
        <img src={planner} alt="Planner" width="400px" height="400px"/>
      </div>
      </div>
      
  );
}

export default App;
