import {Formik,Form} from 'formik';
import {useTasks} from '../context/TaskProvider'
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

function TaskForm() {
  const {createTask,getTask,updateTask} = useTasks()
  const params = useParams()
  const navigate = useNavigate()
  const [task, settask] = useState({title:'',description:''})

  useEffect(() => {
    const loadTask = async () => {
      if(params.id){
        const task = await getTask(params.id)
        settask({title:task.title, description:task.description})
      }
    }
    loadTask()
  }, [])
  

  return (
    <div>


      <Formik 
        initialValues={task} 
        enableReinitialize={true}
        onSubmit={async(values)=>{
          if(params.id){
            await updateTask(params.id,values)
          }else{
            await createTask(values)
          }
          navigate("/")
          settask({title:'',description:''})
        }}
      >
        {({handleChange,handleSubmit,values,isSubmitting})=>(
          <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
            <h1 className='text-xl font-bold uppercase text-center'>{params.id ? "Edit Task" : "New Task"}</h1> 
            <label className='block text-center'>title</label>
            <input type="text" name="title" placeholder="Write a title" 
              onChange={handleChange} value={values.title} className='px-2 py-1 rounded-sm w-full'/>

            <label className='block text-center'>description</label>
            <textarea name="description" rows="3" placeholder='Write a description' 
              onChange={handleChange} value={values.description} className='px-2 py-1 rounded-sm w-full'></textarea>

            <button type="submit" disabled={isSubmitting} className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default TaskForm
