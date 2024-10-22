import axios from 'axios'

//const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/tasks";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:4000", // URL base // Tiempo de espera en milisegundos
    headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados aquí
    },
});


export const createTaksRequest = async (task) => {
    return await axios.post(`${URL}`,task)
}

export const getTasksRequest = async () => {
   try {
        const response = await axiosInstance.get('/tasks'); // Agrega la ruta relativa
        return response.data;
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        throw error; // Re-lanza el error
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
