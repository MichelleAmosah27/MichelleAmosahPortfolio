// import { useEffect, useState } from "react";
// import "./projects.css";

// const API_URL = "/api/projects";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [projectId, setProjectId] = useState("");
//   const [singleProject, setSingleProject] = useState(null);
//   const [createData, setCreateData] = useState({ name: "", description: "" });
//   const [updateData, setUpdateData] = useState({ id: "", name: "", description: "" });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("token");

//   const authHeaders = {
//     "Content-Type": "application/json",
//     Authorization: token ? `Bearer ${token}` : "",
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//   };

//   // ================= FETCH ALL PROJECTS (PUBLIC + LOGGED IN) =================
//   const loadProjects = async () => {
//     try {
//       const res = await fetch(API_URL); // <- PUBLIC ENDPOINT
//       const data = await res.json();
//       setProjects(data);
//     } catch (err) {
//       setError("Could not load projects.");
//     }
//   };

//   // Auto-load projects on page load
//   useEffect(() => {
//     loadProjects();
//   }, []);

//   // ================= ADMIN API ACTIONS =================

//   const getProjectById = async () => {
//     resetMessages();
//     try {
//       const res = await fetch(`${API_URL}/${projectId}`, { headers: authHeaders });
//       const data = await res.json();
//       setSingleProject(data);
//     } catch (err) {
//       setError("Project not found.");
//     }
//   };

//   const createProject = async () => {
//     resetMessages();
//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: authHeaders,
//         body: JSON.stringify(createData),
//       });

//       await res.json();
//       setMessage("Project created successfully!");

//       setCreateData({ name: "", description: "" });

//       // Refresh list after create
//       loadProjects();

//     } catch (err) {
//       setError("Admin only: Could not create project.");
//     }
//   };

//   const updateProject = async () => {
//     resetMessages();
//     try {
//       const res = await fetch(`${API_URL}/${updateData.id}`, {
//         method: "PUT",
//         headers: authHeaders,
//         body: JSON.stringify({ name: updateData.name, description: updateData.description }),
//       });

//       await res.json();
//       setMessage("Project updated!");

//       // Refresh list after update
//       loadProjects();

//     } catch (err) {
//       setError("Admin only: Failed to update project.");
//     }
//   };

//   const deleteProject = async () => {
//     resetMessages();
//     try {
//       await fetch(`${API_URL}/${projectId}`, {
//         method: "DELETE",
//         headers: authHeaders,
//       });

//       setMessage("Project deleted!");
//       setProjectId("");

//       // Refresh list after delete
//       loadProjects();

//     } catch (err) {
//       setError("Admin only: Failed to delete project.");
//     }
//   };

//   const deleteAllProjects = async () => {
//     resetMessages();
//     if (!window.confirm("Delete ALL projects?")) return;

//     try {
//       await fetch(API_URL, { method: "DELETE", headers: authHeaders });
//       setMessage("All projects deleted!");

//       // Refresh list
//       loadProjects();

//     } catch (err) {
//       setError("Admin only: Failed to delete all projects.");
//     }
//   };

//   // ================= UI =================

//   return (
//     <div className="projects-container">
//       <h2>My Projects</h2>
//       <p className="intro">
//         {token
//           ? "Manage and explore your projects."
//           : "Browse my recent work below."}
//       </p>

//       {/* Messages */}
//       {message && <div className="success">{message}</div>}
//       {error && <div className="error">{error}</div>}

//       {/* ============= PUBLIC READ-ONLY DISPLAY ============= */}
//       <div className="projects-grid">
//         {projects.length > 0 ? (
//           projects.map((p) => (
//             <div className="project-card" key={p._id}>
//               <h3>{p.name}</h3>
//               <p>{p.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No projects found.</p>
//         )}
//       </div>

//       {/* ============= ADMIN PANEL (ONLY WHEN LOGGED IN) ============= */}
//       {token && (
//         <>
//           <hr />
//           <h3>Admin Panel</h3>

//           {/* Controls */}
//           <button onClick={loadProjects}>Refresh Projects</button>

//           <div className="inline-group">
//             <input
//               type="text"
//               placeholder="Project ID"
//               value={projectId}
//               onChange={(e) => setProjectId(e.target.value)}
//             />
//             <button onClick={getProjectById}>Get By ID</button>
//             <button className="danger" onClick={deleteProject}>Delete By ID</button>
//           </div>

//           {/* Create */}
//           <div className="form-block">
//             <h4>Create Project</h4>
//             <input
//               type="text"
//               placeholder="Name"
//               value={createData.name}
//               onChange={(e) => setCreateData({ ...createData, name: e.target.value })}
//             />
//             <textarea
//               placeholder="Description"
//               value={createData.description}
//               onChange={(e) => setCreateData({ ...createData, description: e.target.value })}
//             />
//             <button onClick={createProject}>Create</button>
//           </div>

//           {/* Update */}
//           <div className="form-block">
//             <h4>Update Project</h4>
//             <input
//               type="text"
//               placeholder="ID"
//               value={updateData.id}
//               onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="New Name"
//               value={updateData.name}
//               onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
//             />
//             <textarea
//               placeholder="New Description"
//               value={updateData.description}
//               onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
//             />
//             <button onClick={updateProject}>Update</button>
//           </div>

//           <button className="danger" onClick={deleteAllProjects}>
//             Delete All Projects
//           </button>

//           {/* Single project preview */}
//           {singleProject && (
//             <div className="single-project-card">
//               <h3>{singleProject.name}</h3>
//               <p>{singleProject.description}</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import "./projects.css";

const API_URL = "/api/projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [singleProject, setSingleProject] = useState(null);
  const [createData, setCreateData] = useState({ name: "", description: "" });
  const [updateData, setUpdateData] = useState({ id: "", name: "", description: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };

  const resetMessages = () => {
    setMessage("");
    setError("");
  };

  // ================= FETCH ALL PROJECTS =================
  const loadProjects = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      setError("Could not load projects.");
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // ================= ADMIN API ACTIONS =================

  const getProjectById = async () => {
    resetMessages();
    try {
      const res = await fetch(`${API_URL}/${projectId}`, { headers: authHeaders });
      const data = await res.json();
      setSingleProject(data);
    } catch (err) {
      setError("Project not found.");
    }
  };

  const createProject = async () => {
    resetMessages();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify(createData),
      });

      await res.json();
      setMessage("Project created successfully!");
      setCreateData({ name: "", description: "" });

      loadProjects();
    } catch (err) {
      setError("Admin only: Could not create project.");
    }
  };

  const updateProject = async () => {
    resetMessages();
    try {
      const res = await fetch(`${API_URL}/${updateData.id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify({
          name: updateData.name,
          description: updateData.description,
        }),
      });

      await res.json();
      setMessage("Project updated!");

      loadProjects();
    } catch (err) {
      setError("Admin only: Failed to update project.");
    }
  };

  const deleteProject = async () => {
    resetMessages();
    try {
      await fetch(`${API_URL}/${projectId}`, {
        method: "DELETE",
        headers: authHeaders,
      });

      setMessage("Project deleted!");
      setProjectId("");

      loadProjects();
    } catch (err) {
      setError("Admin only: Failed to delete project.");
    }
  };

  const deleteAllProjects = async () => {
    resetMessages();
    if (!window.confirm("Delete ALL projects?")) return;

    try {
      await fetch(API_URL, { method: "DELETE", headers: authHeaders });
      setMessage("All projects deleted!");

      loadProjects();
    } catch (err) {
      setError("Admin only: Failed to delete all projects.");
    }
  };

  // ================= UI =================

  return (
    <div className="projects-container" data-cy="projects-page">
      <h2>My Projects</h2>

      <p className="intro">
        {token ? "Manage and explore your projects." : "Browse my recent work below."}
      </p>

      {/* Messages */}
      {message && <div className="success" data-cy="success-message">{message}</div>}
      {error && <div className="error" data-cy="error-message">{error}</div>}

      {/* Public project grid */}
      <div className="projects-grid" data-cy="projects-grid">
        {projects.length > 0 ? (
          projects.map((p) => (
            <div className="project-card" key={p._id} data-cy="project-card">
              <h3 data-cy="project-name">{p.name}</h3>
              <p data-cy="project-description">{p.description}</p>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      {/* Admin Panel */}
      {token && (
        <>
          <hr />
          <h3>Admin Panel</h3>

          <button onClick={loadProjects} data-cy="refresh-projects">Refresh Projects</button>

          <div className="inline-group">
            <input
              type="text"
              placeholder="Project ID"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              data-cy="project-id-input"
            />

            <button onClick={getProjectById} data-cy="get-project-btn">
              Get By ID
            </button>

            <button className="danger" onClick={deleteProject} data-cy="delete-project-btn">
              Delete By ID
            </button>
          </div>

          {/* Create */}
          <div className="form-block">
            <h4>Create Project</h4>

            <input
              type="text"
              placeholder="Name"
              value={createData.name}
              onChange={(e) => setCreateData({ ...createData, name: e.target.value })}
              data-cy="create-name-input"
            />

            <textarea
              placeholder="Description"
              value={createData.description}
              onChange={(e) =>
                setCreateData({ ...createData, description: e.target.value })
              }
              data-cy="create-description-input"
            />

            <button onClick={createProject} data-cy="create-project-btn">
              Create
            </button>
          </div>

          {/* Update */}
          <div className="form-block">
            <h4>Update Project</h4>

            <input
              type="text"
              placeholder="ID"
              value={updateData.id}
              onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
              data-cy="update-id-input"
            />

            <input
              type="text"
              placeholder="New Name"
              value={updateData.name}
              onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
              data-cy="update-name-input"
            />

            <textarea
              placeholder="New Description"
              value={updateData.description}
              onChange={(e) =>
                setUpdateData({ ...updateData, description: e.target.value })
              }
              data-cy="update-description-input"
            />

            <button onClick={updateProject} data-cy="update-project-btn">
              Update
            </button>
          </div>

          <button className="danger" onClick={deleteAllProjects} data-cy="delete-all-btn">
            Delete All Projects
          </button>

          {singleProject && (
            <div className="single-project-card" data-cy="single-project">
              <h3>{singleProject.name}</h3>
              <p>{singleProject.description}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}


