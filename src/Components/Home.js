import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <Link to="/login">
                <h1>Link to Login</h1>
            </Link>
        </div>
    )
}

export default Home
