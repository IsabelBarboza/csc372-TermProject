import { useEffect, useState } from "react";

export default function Quote() {
    const [quote, setQuote] = useState("");
    const getQuote = async()=> {

    try {
        const res = await fetch("https://dummyjson.com/quotes/random");

    if (!res.ok) {
        throw new Error("API error");
    }
    const data =await res.json();
        setQuote(`${data.quote} — ${data.author}`);
        } catch (error) {
        console.log("Quote error:", error);
        setQuote("Keep going (offline mode)");
        }
  };

    useEffect(()=>{
        getQuote();
    },[]);

    return (
        <div> 
            <h3> Motivation</h3>
            <p>{quote}</p>
            <button onClick={getQuote}>More</button>
        </div>
    );
    }

