import { useEffect, useState } from "react";
import { BASE_URL } from "../api";

export default function Home({ userId }) {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const loadTasks = async () => {
      try {
        const res = await fetch(`${BASE_URL}/tasks/${userId}`);
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.log("Error loading tasks:", err);
      }
    };

    loadTasks();
  }, [userId]);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="home">
         <div className="hero">
      <h1>Welcome to StudySync </h1>
      <p>Organize your study life, stay motivated, and improve daily.</p>
    </div>
        <div className="stats">
        <div className="card">
          <h2>{total}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="card">
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>

        <div className="card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>
      </div>


      <div className="image-grid">
        <img alt="study" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
        <img alt="study" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" />
        <img alt="study" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" />
      </div>
    </div>
  );
}