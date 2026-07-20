import "./CSS/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome back. Here's
            what's happening today.
          </p>
        </div>

        <div className="dashboard-date">
          June 11, 2026
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            Total Bookings
          </div>
          <div className="stat-value">
            124
          </div>
          <div className="stat-growth">
            +12% this month
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Pending Appointments
          </div>
          <div className="stat-value">
            18
          </div>
          <div className="stat-growth">
            Awaiting review
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Products
          </div>
          <div className="stat-value">
            42
          </div>
          <div className="stat-growth">
            Active products
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Blog Posts
          </div>
          <div className="stat-value">
            9
          </div>
          <div className="stat-growth">
            Published
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <h2>Recent Bookings</h2>
        </div>

        <div className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Pet Parent</th>
                <th>Pet</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John Smith</td>
                <td>Buddy</td>
                <td>Vaccination</td>
                <td>11 Jun 2026</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Sarah Jones</td>
                <td>Luna</td>
                <td>Checkup</td>
                <td>12 Jun 2026</td>
                <td>
                  <span className="status approved">
                    Approved
                  </span>
                </td>
              </tr>

              <tr>
                <td>Mike Wilson</td>
                <td>Rocky</td>
                <td>Grooming</td>
                <td>13 Jun 2026</td>
                <td>
                  <span className="status completed">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;