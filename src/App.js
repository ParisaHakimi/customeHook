import "./App.css";
import useForm from "./useForm";
function App() {
  const { fields, changeHandler } = useForm({ text: "", email: "" });
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
