import axios from 'axios'

export const createTaksRequest = async (task) => {
    return await axios.post(`${import.meta.env.VITE_BACKEND_URL}`,task)
}

export const getTasksRequest = async () => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}`)
}

export const deleteTasksRequest = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/${id}`)
}

export const updateTasksRequest = async (id,newFields) => {
    await axios.put(`${import.meta.env.VITE_BACKEND_URL}/${id}`,newFields)
}

export const getTaskRequest = async (id) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/${id}`)
}

export const toggleTaskDoneRequest = async (id,done) => {
    await axios.put(`${import.meta.env.VITE_BACKEND_URL}/${id}`,{done,})
}