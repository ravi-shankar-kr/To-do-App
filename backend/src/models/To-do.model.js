import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "title is required"]
    },

    description:{
        type:String,
        required:[true, "description is required"]
    }
})

const taskModel = mongoose.model("task", taskSchema);

export default taskModel;