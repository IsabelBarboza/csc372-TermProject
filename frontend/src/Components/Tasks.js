import { useEffect, useState } from "react";
import { BASE_URL } from "../api";


export default function Tasks({userId,reload,setReload}) {
    const [tasks,setTasks] =useState([]);
    const [title,setTitle] =useState("");
    
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [dueDate, setDueDate] = useState("");

   
        const [sharedTasks, setSharedTasks] = useState([]);
    const [view, setView] = useState("mine");

    
    useEffect(() => {
        if(!userId) return;
        const loadTasks = async() => {
        const res=await fetch(`${BASE_URL}/tasks/${userId}`);
        const data=await res.json();
        setTasks(data);
    };
        loadTasks();
        }, [reload, userId]);

       

    const addTask = async () => {
  await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      category,
      dueDate,
      userId
    })
  });

  setTitle("");
  setDescription("");
  setCategory("");
  setDueDate("");
  setReload(!reload);
};

const updateTaskStatus = async (id, completed) =>{
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

const shareTask = async (taskId) => {
  const sharedWith = prompt("Enter user ID to share with:");
  await fetch(`${BASE_URL}/tasks/share/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sharedWith })
  });
  setReload(!reload);
};


 useEffect(() => {
    if (!userId) return;
    const loadShared = async () => {
        const res = await fetch(`${BASE_URL}/tasks/shared/${userId}`);
        const data = await res.json();
        setSharedTasks(data);
    };
    loadShared();
    }, [userId, reload]);    

return (
    <div>
        <h2>Tasks</h2>

    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setView("mine")}>My Tasks</button>
        <button onClick={() => setView("shared")}>Shared with me</button>
      </div>
      
        <div className="task-form">
           
      {view === "mine" && (

        
        <>
         <h3>Add New Task</h3>
            <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <input
            placeholder="Category (Homework, Exam...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />

            <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />

        <button onClick={addTask}>Add Task</button>

        </>
        )}
    </div>
      


            {view === "mine" && (
       <div>
            {tasks.map((t) => (
                <div className="task-card" key={t.id}>
                  <div className="task-header">
                    <div>
                     <h4
                    onClick={()=> updateTaskStatus(t.id,t.completed)}
                    style={{
                        textDecoration:t.completed ? "line-through":"none",
                        cursor:"pointer"
                    }}
                    >
                        
                       {t.title}
                       </h4>

                        <p>{t.description}</p>

                        <span>{t.category}</span>

                        <small>Due: {t.due_date}</small>
                        </div>
            

                        <span className={t.completed ? "done" : "pending"}>
                        {t.completed ? "Done" : "Pending"}
                        </span>
                    </div>

                    <div className="task-actions">

                    <button onClick={()=>remove(t.id)}>Delete</button> 
                    <button onClick={() => shareTask(t.id)}>Share</button>
                </div>

                </div>
            ))}
        </div>
        )}



    {view === "shared" && (
    <div>
        {sharedTasks.length === 0 ? (
        <p>No shared tasks</p>
        ) : (
        sharedTasks.map(t => (
            <div className="task-card shared" key={t.id}>
            
            <h4>{t.title}</h4>
            <p>{t.description}</p>
            <span>{t.category}</span>

          <small>Due: {t.due_date}</small>

          <small>Shared by: {t.username}</small>
        </div>
      ))
    )}
  </div>
)}

</div>
    );
}