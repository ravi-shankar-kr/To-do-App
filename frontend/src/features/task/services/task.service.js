import axios from "axios"

export async function createTask({title, description}) {
    const res = await axios.post("http://localhost:3000/api/createTask", {
        title,
        description
    })
    return res.data;
}

export async function getTask() {
    const res = await axios.get("http://localhost:3000/api/getTask")

    const data = await res.data;

    return data;
}