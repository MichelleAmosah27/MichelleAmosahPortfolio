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

//-----------testing week 8 lessons here. Remember to delete-------------

//-------------------------------------------------


const MainRouter = ({ user, onLogout }) => {

    return(

    <>
        <Layout user={user} onLogout={onLogout}/>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='education' element={<Education />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes>

    </>

    )
}

export default MainRouter;