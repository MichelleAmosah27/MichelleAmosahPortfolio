// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     });

//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setForm({
//             ...form,
//             [name]: value
//         });
//     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     try {
//     //         const response = await fetch('/api/users/login', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify(form),
//     //         });

//     //         if (!response.ok) throw new Error('Invalid email or password');

//     //         const data = await response.json();

//     //         // Save login info
//     //         localStorage.setItem('token', data.token);
//     //         localStorage.setItem('username', data.user.username);

//     //         navigate('/'); // go to Home page
//     //     } catch (error) {
//     //         setError(error.message);
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const response = await fetch('/api/users/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(form),
//         });

//         if (!response.ok) throw new Error('Invalid email or password');

//         const data = await response.json();

//         // Save login info
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('username', data.user.username);

//         // Update global state in App.jsx
//         onLogin({ username: data.user.username });

//         navigate('/');
        
//     } catch (error) {
//         setError(error.message);
//     }
// };

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center">Login</h1>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <form className="form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="form-control"
//                         value={form.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="submit-btn">
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {   // <-- FIXED
//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     });

//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('/api/users/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(form),
//             });

//             if (!response.ok) throw new Error('Invalid email or password');

//             const data = await response.json();

//             // Save login info
//             localStorage.setItem('token', data.token);
//             localStorage.setItem('username', data.user.username);

//             // Update global state
//             onLogin({ username: data.user.username });

//             navigate('/');

//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center">Login</h1>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <form className="form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         className="form-control"
//                         value={form.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="submit-btn">
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ onLogin }) => {
    const [form, setForm] = useState({
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
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error('Invalid email or password');

            const data = await response.json();

            // Save login info
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);

            // Update global state in App.jsx
            onLogin({ username: data.user.username });

            navigate('/');

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="login-container" data-cy="login-page">

            <h1 className="login-title" data-cy="login-title">Login</h1>

            {error && (
                <div className="login-error" data-cy="login-error">
                    {error}
                </div>
            )}

            <form className="login-form" onSubmit={handleSubmit} data-cy="login-form">

                <div className="login-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        data-cy="login-email"
                    />
                </div>

                <div className="login-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        data-cy="login-password"
                    />
                </div>

                <button 
                    type="submit" 
                    className="login-btn"
                    data-cy="login-submit"
                >
                    Login
                </button>

            </form>
        </section>
    );
};

export default Login;
