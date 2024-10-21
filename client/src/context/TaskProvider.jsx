import { useContext, useState } from "react";
import { getTasksRequest,deleteTasksRequest,createTaksRequest,getTaskRequest,updateTasksRequest,toggleTaskDoneRequest } from "../api/tasks_api"
import {TaskContext} from './Taskcontext'


export const useTasks = () =>{
   const context = useContext(TaskContext)
   if(!context){
    throw new Error("useTasks must be used within a TaskContextProvider")
   }
   return context
}

export const TaskContextProvier = ({children}) =>{
    const [tasks, settasks] = useState([])

    async function loadTask() {
        const response = await getTasksRequest()
        settasks(response.data)
    }

    const deleteTask = async (id) =>{
        try {
            await deleteTasksRequest(id)
            settasks(tasks.filter(task => task.id != id))
        } catch (error) {
            console.error(error)
        }
    }

    const createTask = async (task) => {
        try {
            await createTaksRequest(task)
            
          } catch (error) {
            console.log(error);
          }
    }

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id)
            return response.data
            
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id,newFields) => {
        try {
            await updateTasksRequest(id,newFields)
        } catch (error) {
            console.log(error)
        }

    }

    const toggleTaskDone = async (id) => {
        try {
            const taskFounded = tasks.find((task) => task.id == id)
            await toggleTaskDoneRequest(id, taskFounded.done ? false : true)
            settasks(
                tasks.map((task) =>
                     task.id == id ? {...task,done:!task.done} : task))
        } catch (error) {
            console.log(error)
        }
    }

    return <TaskContext.Provider value={{tasks, loadTask,deleteTask,createTask,getTask,updateTask,toggleTaskDone}}>{children}</TaskContext.Provider>
}