import { useState } from 'react';
import Register from './Components/Register';
import Tasks from './Components/Tasks';
import Quote from './Components/Quote';
import Login from './Components/Login';
import './App.css';

function App() {

  const [reload,setReload]=useState(false);
  const [loggedIn,setLoggedIn]=useState(false);
  const [showRegister,setShowRegister]=useState(false);
  const [userId,setUserId]=useState(null);
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
      <div className="container">
        <div className="header">
          <h1>StudySync</h1>
          <button onClick={() =>{
          console.log("CLICK LOGIN"); setLoggedIn(false)}}>Logout</button>
        </div>
          <Quote />
          <div  className="card">
          <Tasks userId={userId} reload={reload} setReload={setReload} />
        
        </div>
        </div>
);
}

export default App;
