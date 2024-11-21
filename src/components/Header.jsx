// Import React and Link from react-router-dom
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// Define a functional component called header
const header = () => {
  return (
    <nav>
      <h1>memestore</h1>

      <main>
        
        <HashLink to={"/#home"}>home</HashLink>
        <HashLink to={"/#about"}>about</HashLink>
        <Link to={"/contact"}>contact</Link>
        <HashLink to={"/#brands"}>memes</HashLink>
        <Link to={"/services"}>materials</Link>

        
      </main>
    
      
</nav>
  )
}

export default header