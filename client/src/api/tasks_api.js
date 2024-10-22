import axios from 'axios'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/tasks";


export const createTaksRequest = async (task) => {
    return await axios.post(`${URL}`,task)
}

export const getTasksRequest = async () => {
     try {
        const response = await axios.get(URL);
        return response.data; // Asegúrate de devolver solo los datos
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        throw error; // Re-lanza el error para que pueda ser manejado en otro lugar si es necesario
    }
};

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
