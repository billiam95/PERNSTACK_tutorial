import {useState} from 'react';



const InputTodo = () => {

  const [description, setDescription] = useState("default");

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
    <h1 className="text-center mt-5">Pern Todo List</h1>
    <form onSubmit={submitHandler} className="d-flex mt-3">
      <input
        type="text"
        className="form-control"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="btn btn-success">Add</button>
    </form>
    </div>
  )
}

export default InputTodo;
