import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Register from './Components/Register';
import Tasks from './Components/Tasks';
import Login from './Components/Login';
import Motivation from "./Pages/Motivation";
import Home from "./Pages/Home";

import './App.css';

function App() {

  const [reload,setReload]=useState(false);
  
  const [showRegister,setShowRegister]=useState(false);

  const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem("loggedIn") === "true"
);

const [userId, setUserId] = useState(
  localStorage.getItem("userId")
);


  console.log("USER ID:", userId);


  if(!loggedIn){
    return (
  <div className="auth-container">
    <h1>StudySync</h1>
    {showRegister ? (
      <> 
      <Register/>
      <p>Have an acc?{" "}</p>
        <button onClick={() => setShowRegister(false)}>Go to Login page</button>
      </>
    ) : (
      <>
      <Login setLoggedIn={setLoggedIn} setUserId={setUserId}/>
        <p>Don't have acc?{" "}</p>
        <button onClick={() => {console.log("CLICK REGISTER"); setShowRegister(true)}}>Sign up</button>
      </>
    ) }
    </div>
    );
    }
    return (
    <BrowserRouter>
      <Navbar setLoggedIn={setLoggedIn} />

       <div className="container">
        <Routes>
          
          <Route path="/" element={<Home userId={userId} />} />

      
          <Route
            path="/tasks"
            element={
              <Tasks
                userId={userId}
                reload={reload}
                setReload={setReload}
              />
            }
          />
          
          <Route path="/motivation" element={<Motivation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
} export default App;