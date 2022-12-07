import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import {FaShoppingCart} from "react-icons/fa"
import { useCart } from '../Contextapi/Cartcontext';

const Header = () => {
    const { loginWithRedirect ,logout , user, isAuthenticated} = useAuth0();
    const {total_item} = useCart()

  return (
<>

<header>

    <nav>
        <ul>
            <li><NavLink to={"/"} end>Home</NavLink></li>
            <li><NavLink to={"/product"} end>Product</NavLink></li>
            <li><NavLink to={"/cart"}><FaShoppingCart/> <sup>{total_item}</sup> </NavLink></li>
           {
            isAuthenticated?<li><NavLink to={"/profile"}>Profile </NavLink> </li>:""
           }
            {
                isAuthenticated?<li>  <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button></li>:            <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
            }


           
                   </ul>
    </nav>
</header>

</>
  )
}

export default Header