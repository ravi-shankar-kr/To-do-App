import taskModel from "../models/To-do.model.js";


export async function createTask(req, res) { 
    const {title, description} = req.body;

    const task = await taskModel.create({
        title,
        description
    })

    res.status(201).json({
        message: "task created successfully",
        success:true,
        task:{
            title: task.title,
            description:task.description
        }
    })
}


export async function getTask(req, res) {
    
    const getTask = await taskModel.find();

    if (!getTask) {
        return res.status(401).json({
            message: "task not found",
            success: false
        })
    }

    res.status(200).json({
        message:"task fetched successfully",
        success: true,
        getTask
    })
}