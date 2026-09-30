import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function TaskDetails({
  tasks,
  updateTask,
  deleteTask,
}) {

  const { id } = useParams();

  const navigate = useNavigate();

  const task = tasks.find(
    (task) => task.id === Number(id)
  );

  const [status, setStatus] = useState(
    task?.status || "Raised"
  );

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
      </div>
    );
  }

  const handleUpdate = () => {

    updateTask({
      ...task,
      status,
    });

    alert("Task updated successfully!");
  };

  const handleDelete = () => {

    deleteTask(task.id);

    navigate("/tasks");
  };

  return (
    <div className="page">

      <h1>📄 Task Details</h1>

      <div className="details-card">

        <h2>{task.header}</h2>

        <p>
          <strong>Description:</strong>{" "}
          {task.description}
        </p>

        <p>
          <strong>Priority:</strong>{" "}
          {task.priority}
        </p>

        <p>
          <strong>Category:</strong>{" "}
          {task.category}
        </p>

        <p>
          <strong>Raised:</strong>{" "}
          {task.raisedDate}
        </p>

        <p>
          <strong>Due Date:</strong>{" "}
          {task.dueDate}
        </p>

        <label>
          <strong>Status:</strong>
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>Raised</option>
          <option>Pending</option>
          <option>Closed</option>
        </select>

        <div className="task-actions">

          <button onClick={handleUpdate}>
            Update Task
          </button>

          <button
            className="delete"
            onClick={handleDelete}
          >
            Delete Task
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskDetails;