//import { set } from 'mongoose'
import './App.css'
import MainRouter from "./MainRouter"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

function App() {
 
// Get user from localStorage
  const getUserFromStorage = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return token && username ? { username } : null;
  };

  const [user, setUser] = useState(getUserFromStorage());

  // Sync with localStorage when app loads
  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
      <MainRouter user={user} onLogout={handleLogout}/>
  )
}


export default App
