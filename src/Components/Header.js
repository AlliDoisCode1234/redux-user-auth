import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/home">
                <h1>Link to Home</h1>
            </Link>
        </div>
    )
}

export default Header
