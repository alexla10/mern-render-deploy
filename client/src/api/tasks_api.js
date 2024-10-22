import axios from 'axios'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/tasks";


export const createTaksRequest = async (task) => {
    return await axios.post(`${URL}`,task)
}

export const getTasksRequest = async () => {
    return await axios.get(`${URL}`)
}

export const deleteTasksRequest = async (id) => {
    await axios.delete(`${URL}/${id}`)
}

export const updateTasksRequest = async (id,newFields) => {
    await axios.put(`${URL}/${id}`,newFields)
}

export const getTaskRequest = async (id) => {
    return await axios.get(`${URL}/${id}`)
}

export const toggleTaskDoneRequest = async (id,done) => {
    await axios.put(`${URL}/${id}`,{done,})
}