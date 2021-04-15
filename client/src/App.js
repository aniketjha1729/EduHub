import React from "react";
import axios from "axios";

function App() {
  const myf1 = () => {
    axios
      .get("http://localhost:5000/admin/test")
      .then((response) => console.log(response.data));
  };
  return (
    <div>
      <button onClick={myf1}>Click Me</button>
    </div>
  );
}

export default App;
