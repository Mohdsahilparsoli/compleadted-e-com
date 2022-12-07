import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import Header from './Header'

const Profile = () => {
    const { loginWithRedirect ,logout , user, isAuthenticated} = useAuth0();
  return (
    <>
    <Header/>
<div className="profile">
    <div className="leftdata">
    {
    isAuthenticated?<div> <ul>
        <img src={user.picture} alt="" />
        <li><p>Name: {user.name}</p></li>
        <li><p>Email: {user.email}</p></li>
        </ul>
        </div>:""
}  
    </div>
    <div className="rightdata">
        <h1>Welcome back user</h1>
    </div>
</div>





    </>
  )
}

export default Profile