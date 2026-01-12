

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error('Registration failed');

            const data = await response.json();

            // Save login info automatically
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);

            navigate('/login'); // redirect to Login page

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="register-container" data-cy="register-page">

            <h1 className="register-title" data-cy="register-title">Create an Account</h1>

            {error && (
                <div className="register-error" data-cy="register-error">
                    {error}
                </div>
            )}

            <form className="register-form" onSubmit={handleSubmit} data-cy="register-form">

                {/* Username */}
                <div className="register-field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        data-cy="register-username"
                    />
                </div>

                {/* Email */}
                <div className="register-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        data-cy="register-email"
                    />
                </div>

                {/* Password */}
                <div className="register-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        data-cy="register-password"
                    />
                </div>

                {/* <button 
                    type="submit" 
                    className="register-btn"
                    data-cy="register-submit"
                >
                    Register
                </button> */}

            </form>
        </section>
    );
};

export default Register;
