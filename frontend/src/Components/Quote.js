import { useEffect, useState } from "react";

export default function Quote() {
     const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");
   
  const getQuote = async()=> {
    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
    if (!res.ok) {
        throw new Error("API error");
    }
    const data =await res.json();
        setQuote(`${data.quote} — ${data.author}`);

        
        setImage(`https://picsum.photos/800/600?random=${Date.now()}`);
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
          

             <div className="quote-card">
              {image && (
                    <img className="quote-img" src={image} alt="motivation" />
                )}
            <p className="quote-text">{quote}</p>
            <button onClick={getQuote}>New motivation</button>
        </div>
        </div>
    );
    }

