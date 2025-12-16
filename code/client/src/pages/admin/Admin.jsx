import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/admin/admin.css'

const Admin = () => {
  const navigate = useNavigate();

  // Mock data for demonstration
  const [projectsCount, setProjectsCount] = useState(0);
  const [completedProsCount, setCompletedProsCount] = useState(0);
  const [applicationsCount, setApplicationsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    // Simulate loading mock data
    setTimeout(() => {
      setProjectsCount(24);
      setCompletedProsCount(18);
      setApplicationsCount(67);
      setUsersCount(156);
    }, 500);
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your platform with comprehensive oversight</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>All Projects</h3>
          <p className="stat-number">{projectsCount}</p>
          <button className="btn-primary" onClick={() => navigate('/admin-projects')}>View Projects</button>
        </div>

        <div className="stat-card">
          <h3>Completed Projects</h3>
          <p className="stat-number">{completedProsCount}</p>
          <button className="btn-primary" onClick={() => navigate('/admin-projects')}>View Projects</button>
        </div>

        <div className="stat-card">
          <h3>Applications</h3>
          <p className="stat-number">{applicationsCount}</p>
          <button className="btn-primary" onClick={() => navigate('/admin-applications')}>View Applications</button>
        </div>

        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{usersCount}</p>
          <button className="btn-primary" onClick={() => navigate('/all-users')}>View Users</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => navigate('/admin-projects')}>
              Manage Projects
            </button>
            <button className="action-btn" onClick={() => navigate('/admin-applications')}>
              Review Applications
            </button>
            <button className="action-btn" onClick={() => navigate('/all-users')}>
              User Management
            </button>
            <button className="action-btn" onClick={() => navigate('/admin-projects')}>
              Platform Analytics
            </button>
          </div>
        </div>

        <div className="content-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">2 hours ago</span>
              <span className="activity-desc">New project "E-commerce Website" was created</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">4 hours ago</span>
              <span className="activity-desc">5 new applications submitted for "Mobile App Development"</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">6 hours ago</span>
              <span className="activity-desc">Project "Logo Design" marked as completed</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">1 day ago</span>
              <span className="activity-desc">New user "John Smith" registered as freelancer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin