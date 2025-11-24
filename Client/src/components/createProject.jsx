import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                throw new Error(errorData.message || "Failed to create");
            }

            navigate("/projects");  // Go back to project list

        } catch (error) {
            console.error("Create project error:", error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create Project</h2>

            <form onSubmit={handleSubmit} className="mt-4">

                <div className="mb-3">
                    <label>Project Name</label>
                    <input 
                        name="name"
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>First Name</label>
                    <input 
                        name="firstName"
                        type="text"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input 
                        name="lastName"
                        type="text"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input 
                        name="email"
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Completion Date</label>
                    <input 
                        name="completion"
                        type="date"
                        className="form-control"
                        value={formData.completion}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Description</label>
                    <textarea 
                        name="description"
                        className="form-control"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-primary">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;
