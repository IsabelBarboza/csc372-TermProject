import { useEffect, useState } from "react";
import { BASE_URL } from "../api";


export default function Tasks({userId,reload,setReload}) {
    const [tasks,setTasks] =useState([]);
    const [title,setTitle] =useState("");

    
    useEffect(() => {
        if(!userId) return;
        const loadTasks = async() => {
        const res=await fetch(`${BASE_URL}/tasks/${userId}`);
        const data=await res.json();
        setTasks(data);
    };
        loadTasks();
        }, [reload, userId]);



    const addTask =async()=>{
    await fetch(`${BASE_URL}/tasks`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title,userId})
    });
            setTitle("");
            setReload(!reload);
    };

const updateTaskStatus =async (id, completed) =>{
        await fetch(`${BASE_URL}/tasks/${id}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({completed: !completed})
    });
    setReload(!reload);
};
    
const remove =async (id) => {
    await fetch(`${BASE_URL}/tasks/${id}`,{
        method:"DELETE",
        });
        setReload(!reload);
        };



return (
    <div>
        <h2>Tasks</h2>

        <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="New task"
        />

        <button onClick={addTask}>Add</button>

        <ul>
            {tasks.map((t) => (
                <li key={t.id}>
                    <span
                    onClick={()=> updateTaskStatus(t.id,t.completed)}
                    style={{
                        textDecoration:t.completed ? "line-through":"none",
                        cursor:"pointer"
                    }}
                    >
                        { t.title }
                    </span>
                    <button onClick={()=>remove(t.id)}>Delete</button> 
                </li>
            ))}
        </ul>
    </div>
    );
}