import React, { useState,useEffect} from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [filterFruits,setFruits]=useState(fruits)

  useEffect(()=>{
    setFruits(fruits.filter(value=>value.toLowerCase().includes(searchTerm.toLowerCase())))
  },[searchTerm]

  )
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <ul>
        {filterFruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;