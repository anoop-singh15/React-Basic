// import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';


function Profile() {
    const auth=useAuth();
    const navigate=useNavigate();

    const handleLogout=()=>{
        auth.logout();
        navigate('/');
    }
  return (
    <div>
        {
            !auth.user?<h2>Welcome Guest</h2>:<h2>Welcome {auth.user}</h2>
        }
       {/* Welcome {auth.user} */}
       <button onClick={handleLogout}> Logout</button>
    </div>
  )
}

export default Profile