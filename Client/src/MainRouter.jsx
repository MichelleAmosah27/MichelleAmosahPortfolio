
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Projects from './components/projects';
import Services from './components/services';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import CreateProject from './components/createProject.jsx';
import UpdateProject from './components/updateProject.jsx';

const MainRouter = ({ user, onLogout, onLogin }) => {

    return(
        <>
            <Layout user={user} onLogout={onLogout} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='education' element={<Education />} />
                {/* <Route path='projects' element={<Projects />} /> */}
                {/* <Route path='services' element={<Services />} /> */}
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login onLogin={onLogin} />} />
                <Route path="/project-create" element={<CreateProject />} />
                <Route path="/project-update/:id" element={<UpdateProject />} />
            </Routes>
        </>
    );
}

export default MainRouter;
