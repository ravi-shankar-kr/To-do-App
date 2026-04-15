import { createTask } from "../services/task.service";
import {useDispatch} from "react-redux"
import {setTask} from "../slices/taskSlice"



export const  useTask = ()=> {

    const dispatch = useDispatch();
    
    async function handleTask({
        title,
        description
    }) {
        const data =await createTask({
            title,
            description
        })

        dispatch(setTask(data.task))
    }

    return {handleTask}
}