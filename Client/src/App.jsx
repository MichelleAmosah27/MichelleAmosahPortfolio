//import { set } from 'mongoose'
import './App.css'
import MainRouter from "./MainRouter"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';


function App() {
 
   const [user, setUser] = useState(null);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUser({ username });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUser(null);
    };

    return (
       
            <MainRouter user={user} onLogout={handleLogout} onLogin={setUser}/>
      
    );
}


export default App
