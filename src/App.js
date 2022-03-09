import "./App.css";
import { useState } from "react";
function App() {
  const [fields, setFields] = useState({ text: "ali", email: 10 });
  const changeHandler = (e) => {
    setFields({ [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <input
        type="text"
        name="text"
        onChange={changeHandler}
        value={fields.text}
      />
      <input
        type="email"
        name="email"
        onChange={changeHandler}
        value={fields.email}
      />
    </div>
  );
}

export default App;
