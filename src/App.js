import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Tasks from './components/tasks';
import uniqid from "uniqid"
function App() {
  const [tasks, setTasks] = useState([])

  // Task.test
  const [taskText, setTaskText] = useState('')

  // Editing state
  const [isEditing, setIsEditing] = useState(false)

  // Delete specific task matching id in argument
  const deleteTask = (id) =>{
    // Filter out task with provided id
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Edit task with specified id
  const initiateEditing = (id)=> {

  }
  // Save new task
  const saveTasks = () =>{
    setTasks([...tasks, {id: uniqid(), text: taskText}])
    setTaskText('')
  }

  
  return (
    <div className="App">
      <Form onSave = {saveTasks} taskText={taskText} 
      onTextChange ={setTaskText} isEditing={isEditing}/>
      <Tasks deleteTask={deleteTask} editTask={initiateEditing} tasks={tasks}/>
    </div>
  );
}

export default App;
