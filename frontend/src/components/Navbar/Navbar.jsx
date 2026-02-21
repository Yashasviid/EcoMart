import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const cartCount = 0; 

  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>EcoMart</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>

        <li onClick={() => setMenu("clothes")}>
          <Link to="/clothes">Clothes</Link>
          {menu === "clothes" && <hr />}
        </li>

        <li onClick={() => setMenu("books")}>
          <Link to="/books">Books</Link>
          {menu === "books" && <hr />}
        </li>

        <li onClick={() => setMenu("grocery")}>
          <Link to="/grocery">Grocery</Link>
          {menu === "grocery" && <hr />}
        </li>

        <li onClick={() => setMenu("stationary")}>
          <Link to="/stationary">Stationary</Link>
          {menu === "stationary" && <hr />}
        </li>

        <li onClick={() => setMenu("appliances")}>
          <Link to="/appliances">Appliances</Link>
          {menu === "appliances" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/cart" className="cart-icon-wrapper">
          <img src={cart_icon} alt="cart" />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>

    </div>
  )
}

export default Navbar