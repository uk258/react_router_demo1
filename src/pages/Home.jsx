// import React,{useState} from 'react'
// import {Navigate} from 'react-router-dom'
import { NavLink,Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="message">Message</NavLink>
            </li>
          </ul>
          <Outlet/>
        </div>
      </div>

    </div>
  )
}
