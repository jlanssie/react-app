import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
      </ul>
    </nav>
  )
}
