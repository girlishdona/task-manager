import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ addTask }) {

  const navigate = useNavigate();

  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academic");
  const [dueDate, setDueDate] = useState("2026-08-28");

  const handleSubmit = (e) => {

    e.preventDefault();

    const newTask = {
      id: Date.now(),

      header,

      description,

      priority,

      category,

      raisedDate: new Date().toLocaleString(),

      dueDate,

      status: "Raised",
    };

    addTask(newTask);

    navigate("/tasks");
  };

  return (
    <div className="page">

      <h1>➕ Add Task</h1>

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <label>Task Header</label>

        <input
          type="text"
          value={header}
          onChange={(e) =>
            setHeader(e.target.value)
          }
          required
        />

        <label>Task Description</label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          required
        />

        <label>Priority</label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Category</label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Academic</option>
          <option>Personal</option>
        </select>

        <label>Due Date</label>

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

        <button type="submit">
          Create Task
        </button>

      </form>

    </div>
  );
}

export default AddTask;