import React, { useState } from "react";

function App() {

  const [age, setAge] = useState(25)

  function oldAge() 
  {
     setAge(age + 1);
  }

  return (
      <div className="container">
        <h1>Today I am Years of {age}</h1>
        <button onClick={oldAge}>
          Get Older
        </button>
      </div>
  );
 
}

export default App;
