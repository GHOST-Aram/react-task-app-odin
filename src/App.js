import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Tasks from './components/tasks';
function App() {
  const [tasks, setTasks] = useState([])

  const [taskText, setTaskText] = useState('tEXT100')


  const saveTasks = () =>{
    setTasks([...tasks, {id: tasks.length, text: taskText}])
  }
  
  return (
    <div className="App">
      <Form onSave = {saveTasks} taskText={taskText} onTextChange ={setTaskText}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
