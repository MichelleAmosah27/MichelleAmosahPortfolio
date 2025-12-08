// //This page will manage request from the client with the appropriate authentication

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProjectsList = () => {
//     const [projects, setProjects] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const token = localStorage.getItem("token");

//                 if (!token) {
//                     navigate("/login");
//                     return;
//                 }

//                 const response = await fetch("http://localhost:3000/api/projects", {
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": `Bearer ${token}`,
//                     },
//                 });

//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || "Failed to fetch");
//                 }

//                 const data = await response.json();
//                 setProjects(data);

//             } catch (error) {
//                 console.error("Error fetching projects:", error.message);
//             }
//         };

//         fetchProjects();
//     }, [navigate]);


//     const handleDelete = async (projectId) => {
//         try {
//             const token = localStorage.getItem("token");

//             if (!token) {
//                 console.error("No token found");
//                 navigate("/login");
//                 return;
//             }

//             const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
//                 method: "DELETE",
//                 headers: {
//                     "Authorization": `Bearer ${token}`,
//                 },
//             });

//             if (!response.ok) {
//                 const errData = await response.json();
//                 throw new Error(errData.message || "Delete failed");
//             }

//             setProjects(prev => prev.filter(p => p._id !== projectId));

//         } catch (error) {
//             console.error("Error deleting project:", error.message);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h1 className="text-center mb-4">Projects</h1>

//             {/* Create button */}
//             <button
//                 className="btn btn-primary mb-3"
//                 onClick={() => navigate("/project-create")}
//             >
//                 Create New Project
//             </button>

//             {/* Project Table */}
//             {projects.length > 0 ? (
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Project Name</th>
//                             <th>Owner</th>
//                             <th>Email</th>
//                             <th>Description</th>
//                             <th>Completed On</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {projects.map((project) => (
//                             <tr key={project._id}>
//                                 <td>{project.name}</td>
//                                 <td>{project.firstName} {project.lastName}</td>
//                                 <td>{project.email}</td>
//                                 <td>{project.description}</td>
//                                 <td>
//                                     {project.completion
//                                         ? new Date(project.completion).toLocaleDateString()
//                                         : "—"}
//                                 </td>

//                                 <td>
//                                     <button
//                                         className="btn btn-secondary me-2"
//                                         onClick={() => navigate(`/project-update/${project._id}`)}
//                                     >
//                                         Update
//                                     </button>

//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => handleDelete(project._id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p className="text-center">No projects available</p>
//             )}
//         </div>
//     );
// };

// export default ProjectsList;


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState("");
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
                setError(error.message);
            }
        };

        fetchProjects();
    }, [navigate]);


    const handleDelete = async (projectId) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
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
            setError(error.message);
        }
    };

    return (
        <section className="projects-container" data-cy="projects-page">

            <h1 className="projects-title" data-cy="projects-title">
                Projects
            </h1>

            {error && (
                <div className="projects-error" data-cy="projects-error">
                    {error}
                </div>
            )}

            <button
                className="create-project-btn"
                data-cy="create-project-btn"
                onClick={() => navigate("/project-create")}
            >
                + Create New Project
            </button>

            {/* Project Cards */}
            {projects.length > 0 ? (
                <div className="projects-grid" data-cy="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" data-cy="project-card" key={project._id}>
                            
                            <h3 className="project-card-title">{project.name}</h3>

                            <p className="project-card-owner">
                                Owner: {project.firstName} {project.lastName || ""}
                            </p>

                            <p className="project-card-email">
                                Email: {project.email || "—"}
                            </p>

                            <p className="project-card-description">
                                {project.description || "No description provided."}
                            </p>

                            <p className="project-card-date">
                                Completed:{" "}
                                {project.completion
                                    ? new Date(project.completion).toLocaleDateString()
                                    : "—"}
                            </p>

                            <div className="project-actions">
                                <button
                                    className="project-update-btn"
                                    data-cy="update-project-btn"
                                    onClick={() => navigate(`/project-update/${project._id}`)}
                                >
                                    Update
                                </button>

                                <button
                                    className="project-delete-btn"
                                    data-cy="delete-project-btn"
                                    onClick={() => handleDelete(project._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p class-name="no-projects" data-cy="projects-empty">
                    No projects found.
                </p>
            )}
        </section>
    );
};

export default ProjectsList;

