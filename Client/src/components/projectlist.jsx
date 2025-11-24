//This page will manage request from the client with the appropriate authentication

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await fetch("http://localhost:3000/api/projects", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Failed to fetch");
                }

                const data = await response.json();
                setProjects(data);

            } catch (error) {
                console.error("Error fetching projects:", error.message);
            }
        };

        fetchProjects();
    }, [navigate]);


    const handleDelete = async (projectId) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found");
                navigate("/login");
                return;
            }

            const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || "Delete failed");
            }

            setProjects(prev => prev.filter(p => p._id !== projectId));

        } catch (error) {
            console.error("Error deleting project:", error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Projects</h1>

            {/* Create button */}
            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate("/project-create")}
            >
                Create New Project
            </button>

            {/* Project Table */}
            {projects.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Owner</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Completed On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project) => (
                            <tr key={project._id}>
                                <td>{project.name}</td>
                                <td>{project.firstName} {project.lastName}</td>
                                <td>{project.email}</td>
                                <td>{project.description}</td>
                                <td>
                                    {project.completion
                                        ? new Date(project.completion).toLocaleDateString()
                                        : "—"}
                                </td>

                                <td>
                                    <button
                                        className="btn btn-secondary me-2"
                                        onClick={() => navigate(`/project-update/${project._id}`)}
                                    >
                                        Update
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(project._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No projects available</p>
            )}
        </div>
    );
};

export default ProjectsList;
