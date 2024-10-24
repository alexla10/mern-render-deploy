import './App.css'
import {Route,Routes} from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import {TaskContextProvier } from './context/TaskProvider'

function App() {

  return (

    <div className='bg-zinc-900 h-screen'>
      <NavBar />
      <div className="conteine mx-auto py-4 px-20">
      <TaskContextProvier>
        <Routes>
          <Route path='/' element={<TaskPage/>}/>
          <Route path='/new' element={<TaskForm/>}/>
          <Route path='/edit/:id' element={<TaskForm/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </TaskContextProvier>
      </div>
    </div>
    
  )
}

export default App
