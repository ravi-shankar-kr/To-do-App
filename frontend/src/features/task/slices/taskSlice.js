import {createSlice} from "@reduxjs/toolkit"

export const taskSlice = createSlice({
        name: "task",
        initialState:{
                task: []
        },

        reducers:{

                setTask: (state, action) => {
                        state.task = action.payload
                }
                // setTitle:(state, action) => {
                //         state.title = action.payload
                // },

                // setDescription:() => {
                //         state.description = action.payload
                // }
        }
})

// const {setTitle, setDescription} = taskSlice.actions;
export const {setTask} = taskSlice.actions;

export default taskSlice.reducer;