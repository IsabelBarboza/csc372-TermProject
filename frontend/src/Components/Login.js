import { useState } from "react";
import { BASE_URL } from "../api";

export default function Login({ setLoggedIn,setUserId }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async() => {
  try{
  const res = await fetch(`${BASE_URL}/login`,{
           method:"POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({user,pass}),
       });

    const data=await res.json();
    console.log("LOGIN RESPONSE:",data);

    if(res.ok){
        setUserId(data.userId);
        setLoggedIn(true);
    }else{
        alert(data.error);
    }
    } catch(err){
        console.log("Login error:",err);
    }
};

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}