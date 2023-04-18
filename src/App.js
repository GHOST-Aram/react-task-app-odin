import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Tasks from './components/tasks';
import uniqid from "uniqid"
function App() {
  const [tasks, setTasks] = useState([])

  const [taskText, setTaskText] = useState('')

  // Delete specific task matching id in argument
  const deleteTask = (id) =>{
    // Filter out task with provided id
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Save new task
  const saveTasks = () =>{
    setTasks([...tasks, {id: uniqid(), text: taskText}])
    setTaskText('')
  }
  
  return (
    <div className="App">
      <Form onSave = {saveTasks} taskText={taskText} onTextChange ={setTaskText}/>
      <Tasks deleteTask={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
