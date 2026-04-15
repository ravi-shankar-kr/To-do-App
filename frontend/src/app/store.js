import { configureStore } from "@reduxjs/toolkit";
import TaskSliceReducer from "../features/task/slices/taskSlice";


const store = configureStore({
    reducer:{
        task: TaskSliceReducer
    }
})

export default store