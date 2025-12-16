import React, { useEffect, useState } from 'react'
import '../../styles/freelancer/freelancer.css'
import { useNavigate } from 'react-router-dom';

const Freelancer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const usertype = localStorage.getItem('usertype');
    setUser({ username, email, usertype });
  }, []);

  const mockProjects = [
    { id: 1, title: 'Website Development', status: 'Active', budget: '$500' },
    { id: 2, title: 'Mobile App Design', status: 'Completed', budget: '$800' },
    { id: 3, title: 'Logo Design', status: 'In Progress', budget: '$200' }
  ];

  const categories = [
    'Web Development', 'Mobile Apps', 'Design', 'Writing', 'Marketing', 'Consulting'
  ];

  return (
    <div className="freelancer-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user.username}!</h1>
        <p>Freelancer Dashboard - Build your career</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-number">3</p>
        </div>
        <div className="stat-card">
          <h3>Completed Projects</h3>
          <p className="stat-number">12</p>
        </div>
        <div className="stat-card">
          <h3>Total Earnings</h3>
          <p className="stat-number">$2,450</p>
        </div>
        <div className="stat-card">
          <h3>Rating</h3>
          <p className="stat-number">4.8 ⭐</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2>Available Projects</h2>
          <div className="projects-grid">
            {mockProjects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>Status: <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span></p>
                <p>Budget: {project.budget}</p>
                <button className="btn-primary">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h4>{category}</h4>
                <p>Explore opportunities</p>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => navigate('/all-projects')}>
              Browse All Projects
            </button>
            <button className="action-btn" onClick={() => navigate('/my-projects')}>
              My Projects
            </button>
            <button className="action-btn" onClick={() => navigate('/myApplications')}>
              My Applications
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Freelancer