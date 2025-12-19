import React from 'react'
import Portfolio from './../Portfolio/Portfolio';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return <>
  <nav className='bg-slate-700 text-white py-6'>
    <div className="container flex justify-between items-center">
      <h2 className='text-3xl font-bold'>START FRAMEWORK</h2>
      <div>
        <ul className='flex gap-8 list-none text-base items-center font-semibold'>
          <li>
            <NavLink 
              to='about' 
              className={({ isActive }) => 
                isActive 
                  ? "no-underline text-white bg-teal-500 px-4 py-2 rounded" 
                  : "no-underline text-white hover:text-teal-400 px-4 py-2"
              }
              style={{ textDecoration: 'none' }}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='portfolio' 
              className={({ isActive }) => 
                isActive 
                  ? "no-underline text-white bg-teal-500 px-4 py-2 rounded" 
                  : "no-underline text-white hover:text-teal-400 px-4 py-2"
              }
              style={{ textDecoration: 'none' }}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='contact' 
              className={({ isActive }) => 
                isActive 
                  ? "no-underline text-white bg-teal-500 px-4 py-2 rounded" 
                  : "no-underline text-white hover:text-teal-400 px-4 py-2"
              }
              style={{ textDecoration: 'none' }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
}