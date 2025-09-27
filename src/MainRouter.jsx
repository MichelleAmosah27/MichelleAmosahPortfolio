import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Projects from './components/projects';
import Services from './components/services';
import Home from './components/home';


const MainRouter = () => {

    return(

    <>
        <Layout />

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='education' element={<Education />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='services' element={<Services />}></Route>
        </Routes>

    </>

    )
}

export default MainRouter;