import React from 'react'
import './style.css'

const Nav = () => {
    return (
        <div className="navContainer">
            <div className="logoNav">
                <h2>My tienda online</h2>
            </div>
            <div className="navLinks">
                <ul>
                    <li>Celulares</li>
                    <li>Notebook</li>
                    <li>Accesorios</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
