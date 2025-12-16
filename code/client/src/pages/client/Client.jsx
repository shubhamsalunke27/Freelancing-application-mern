import React, { useEffect, useState } from 'react'
import '../../styles/client/client.css'
import { useNavigate } from 'react-router-dom'

const Client = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const usertype = localStorage.getItem('usertype');
    setUser({ username, email, usertype });
  }, []);

  const mockProjects = [
    { id: 1, title: 'E-commerce Website', status: 'Active', budget: '$1,200', applications: 5 },
    { id: 2, title: 'Mobile App Development', status: 'Completed', budget: '$2,500', applications: 8 },
    { id: 3, title: 'Logo Design', status: 'In Progress', budget: '$300', applications: 3 }
  ];

  const freelancers = [
    { id: 1, name: 'John Doe', rating: 4.8, skills: 'React, Node.js' },
    { id: 2, name: 'Jane Smith', rating: 4.9, skills: 'Python, Django' },
    { id: 3, name: 'Mike Johnson', rating: 4.7, skills: 'UI/UX Design' }
  ];

  return (
    <div className="client-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user.username}!</h1>
        <p>Client Dashboard - Find the perfect talent</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-number">3</p>
        </div>
        <div className="stat-card">
          <h3>Completed Projects</h3>
          <p className="stat-number">7</p>
        </div>
        <div className="stat-card">
          <h3>Total Spent</h3>
          <p className="stat-number">$8,450</p>
        </div>
        <div className="stat-card">
          <h3>Freelancers Hired</h3>
          <p className="stat-number">12</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {mockProjects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>Status: <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span></p>
                <p>Budget: {project.budget}</p>
                <p>Applications: {project.applications}</p>
                <button className="btn-primary">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Top Freelancers</h2>
          <div className="freelancers-grid">
            {freelancers.map(freelancer => (
              <div key={freelancer.id} className="freelancer-card">
                <h4>{freelancer.name}</h4>
                <p>⭐ {freelancer.rating}</p>
                <p>Skills: {freelancer.skills}</p>
                <button className="btn-primary">Hire Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => navigate('/new-project')}>
              Post New Project
            </button>
            <button className="action-btn" onClick={() => navigate('/project-applications')}>
              View Applications
            </button>
            <button className="action-btn" onClick={() => navigate('/all-projects')}>
              Browse Freelancers
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client