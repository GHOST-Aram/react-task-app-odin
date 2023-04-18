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

  // return task with specified id in tasks array
  const getTask = (id) => {
    let taskToEdit = null
    tasks.forEach(task =>{
      if(task.id === id){taskToEdit = task }
    })
    return taskToEdit
  }
  // Initiatiate task editing with specified id if Edit task button is clicked
  const initiateEditing = (id)=> {
    // Invert state of isEditing
    setIsEditing(!isEditing)

    //Get task to be edited
    const taskToEdit = getTask(id)

    console.log(taskToEdit)
    // Populate Textbox with text of task to be edited
    setTaskText(taskToEdit.text)

    // Filter out task to be edited from tasks
    setTasks(tasks.filter(task => task.id !== id))
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
