// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateProject = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         completion: "",
//         description: ""
//     });

//     useEffect(() => {
//         const fetchProject = async () => {
//             try {
//                 const token = localStorage.getItem("token");

//                 const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
//                     headers: {
//                         "Authorization": `Bearer ${token}`
//                     }
//                 });

//                 const data = await response.json();

//                 setFormData({
//                     name: data.name,
//                     firstName: data.firstName,
//                     lastName: data.lastName,
//                     email: data.email,
//                     completion: data.completion ? data.completion.substring(0, 10) : "",
//                     description: data.description
//                 });

//             } catch (error) {
//                 console.error("Error loading project:", error.message);
//             }
//         };

//         fetchProject();
//     }, [id]);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem("token");

//             const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message);
//             }

//             navigate("/projects");

//         } catch (error) {
//             console.error("Error updating project:", error.message);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Update Project</h2>

//             <form onSubmit={handleSubmit} className="mt-4">

//                 <div className="mb-3">
//                     <label>Project Name</label>
//                     <input 
//                         name="name"
//                         type="text"
//                         className="form-control"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>First Name</label>
//                     <input 
//                         name="firstName"
//                         type="text"
//                         className="form-control"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Last Name</label>
//                     <input 
//                         name="lastName"
//                         type="text"
//                         className="form-control"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Email</label>
//                     <input 
//                         name="email"
//                         type="email"
//                         className="form-control"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Completion Date</label>
//                     <input 
//                         name="completion"
//                         type="date"
//                         className="form-control"
//                         value={formData.completion}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Description</label>
//                     <textarea 
//                         name="description"
//                         className="form-control"
//                         rows="4"
//                         value={formData.description}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button className="btn btn-primary">Update Project</button>
//             </form>
//         </div>
//     );
// };

// export default UpdateProject;


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './updateProject.css';

const UpdateProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        firstName: "",
        lastName: "",
        email: "",
        completion: "",
        description: ""
    });

    const [error, setError] = useState("");

    // Load existing project
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to load project");
                }

                const data = await response.json();

                setFormData({
                    name: data.name || "",
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    email: data.email || "",
                    completion: data.completion ? data.completion.substring(0, 10) : "",
                    description: data.description || ""
                });

            } catch (error) {
                console.error("Error loading project:", error.message);
                setError(error.message);
            }
        };

        fetchProject();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Update failed");
            }

            navigate("/projects");

        } catch (error) {
            console.error("Error updating project:", error.message);
            setError(error.message);
        }
    };

    return (
        <section className="project-update-container" data-cy="update-project-page">

            <h1 className="project-update-title" data-cy="update-project-title">
                Update Project
            </h1>

            {error && (
                <div className="project-error" data-cy="update-error">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="project-form" data-cy="update-project-form">

                {/* Project Name */}
                <div className="project-field">
                    <label>Project Name</label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-cy="update-name"
                    />
                </div>

                {/* First Name */}
                <div className="project-field">
                    <label>First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        data-cy="update-firstName"
                    />
                </div>

                {/* Last Name */}
                <div className="project-field">
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        data-cy="update-lastName"
                    />
                </div>

                {/* Email */}
                <div className="project-field">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        data-cy="update-email"
                    />
                </div>

                {/* Completion Date */}
                <div className="project-field">
                    <label>Completion Date</label>
                    <input
                        name="completion"
                        type="date"
                        value={formData.completion}
                        onChange={handleChange}
                        data-cy="update-completion"
                    />
                </div>

                {/* Description */}
                <div className="project-field">
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        data-cy="update-description"
                    />
                </div>

                <button 
                    type="submit" 
                    className="project-submit-btn"
                    data-cy="update-submit"
                >
                    Update Project
                </button>

            </form>
        </section>
    );
};

export default UpdateProject;

