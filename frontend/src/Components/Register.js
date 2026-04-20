import { useState } from "react";
import { BASE_URL } from "../api";

export default function Register() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = async () => {
    const res = await fetch(`${BASE_URL}/register`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user,pass}),
    });
    const data=await res.json();

    if (res.ok){
        alert("User created");
        setUser("");
        setPass("");
    }else{
        alert(data.error);
    }
    };
  
  return (
    <div>
      <h2>Register</h2>

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

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}