function CompletedTasks({ tasks }) {

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page">

      <h1>✅ Completed Tasks</h1>

      {completedTasks.length === 0 ? (

        <p className="empty">
          No completed tasks yet.
        </p>

      ) : (

        <div className="task-list">

          {completedTasks.map((task) => (

            <div
              className="task-card"
              key={task.id}
            >

              <div>

                <h2>{task.header}</h2>

                <p>{task.description}</p>

                <p>
                  Category: {task.category}
                </p>

                <p>
                  Priority: {task.priority}
                </p>

                <p>
                  Status: ✅ Closed
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default CompletedTasks;