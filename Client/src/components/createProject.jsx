


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './createProject.css';

const CreateProject = () => {
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create project");
            }

            navigate("/projects");

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="project-create-container" data-cy="create-project-page">

            <h1 className="project-create-title" data-cy="create-project-title">
                Create Project
            </h1>

            {error && (
                <div className="project-error" data-cy="project-error">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="project-form" data-cy="project-form">

                {/* Project Name */}
                <div className="project-field">
                    <label>Project Name</label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-cy="input-project-name"
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
                        data-cy="input-firstName"
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
                        data-cy="input-lastName"
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
                        data-cy="input-email"
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
                        data-cy="input-completion"
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
                        data-cy="input-description"
                    />
                </div>

                <button 
                    type="submit" 
                    className="project-submit-btn"
                    data-cy="submit-project"
                >
                    Create Project
                </button>
            </form>

        </section>
    );
};

export default CreateProject;
