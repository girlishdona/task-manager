function Dashboard({ tasks }) {

  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const closed = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  const raised = tasks.filter(
    (task) => task.status === "Raised"
  ).length;

  return (
    <div className="page">

      <h1>📊 Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>{total}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{raised}</h2>
          <p>Raised</p>
        </div>

        <div className="dashboard-card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="dashboard-card">
          <h2>{closed}</h2>
          <p>Completed</p>
        </div>

      </div>

      <div className="welcome">
        <h2>Welcome to Task Manager 👋</h2>

        <p>
          Create, manage, update and complete
          your tasks easily.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;