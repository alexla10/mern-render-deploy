import { prisma } from "../db/conexion.js";

export const getTasks = async (req,res) => {
    try {
        const tasks = await prisma.tasks.findMany()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getTask = async (req,res) => {
    try {
        const task = await prisma.tasks.findFirst({
            where:{
                id: parseInt(req.params.id)
            }
        })
    
        if(!task){
            return res.status(404).json({erorr:"Taks not found"})
        }
        return res.json(task)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createTask = async (req,res) => {
    try {
        const {title,description} = req.body
        const newTaks = await prisma.tasks.create({
            data: req.body
        })
        res.json(newTaks);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateTass = async (req,res) => {
    const taskId = parseInt(req.params.id);

    try {
        const task = await prisma.tasks.update({
            where: {
                id: taskId,
            },
            data: req.body
        });
        return res.status(200).json(task); // No hay contenido que devolver
    } catch (error) {
        if (error.code === 'P2025') { // Código de error para "Registro no encontrado"
            return res.status(404).json({ error: "Task not found" });
        }
        console.error('Error al actualizar la tarea:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteTask = async (req,res) => {
    const taskId = parseInt(req.params.id);

    try {
        const task = await prisma.tasks.delete({
            where: {
                id: taskId,
            },
        });
        return res.status(204).json(); // No hay contenido que devolver
    } catch (error) {
        if (error.code === 'P2025') { // Código de error para "Registro no encontrado"
            return res.status(404).json({ error: "Task not found" });
        }
        console.error('Error al eliminar la tarea:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}