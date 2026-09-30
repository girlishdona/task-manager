import { Link } from "react-router-dom";
import { useState } from "react";

function Tasks({
  tasks,
  deleteTask,
  completeTask,
}) {

  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) => task.status === filter
        );

  return (
    <div className="page">

      <h1>📋 Tasks</h1>

      <div className="filters">

        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Raised")}>
          Raised
        </button>

        <button onClick={() => setFilter("Pending")}>
          Pending
        </button>

        <button onClick={() => setFilter("Closed")}>
          Closed
        </button>

      </div>

      {filteredTasks.length === 0 && (
        <p className="empty">
          No tasks found.
        </p>
      )}

      <div className="task-list">

        {filteredTasks.map((task) => (

          <div className="task-card" key={task.id}>

            <div>

              <h2>{task.header}</h2>

              <p>{task.description}</p>

              <p>
                <strong>Priority:</strong>{" "}
                {task.priority}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {task.category}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {task.status}
              </p>

              <p>
                <strong>Due:</strong>{" "}
                {task.dueDate}
              </p>

            </div>

            <div className="task-actions">

              <Link to={`/task/${task.id}`}>
                View Details
              </Link>

              {task.status !== "Closed" && (
                <button
                  onClick={() =>
                    completeTask(task.id)
                  }
                >
                  Complete
                </button>
              )}

              <button
                className="delete"
                onClick={() =>
                  deleteTask(task.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Tasks;