import React from 'react'

export default function Footer() {
  return <>
  <footer className='bg-blue-950 text-white position-relative bottom-0'>
    <div className='container py-3 '>
      <div className='flex justify-evenly '>
        <div className='w-1/3'>
          <h3>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className='w-1/3'>
          <h3>Around the web</h3>
          <div className="icons flex gap-1 py-2 text-3xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>

          </div>
        </div>
        <div className='w-1/3'>
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      <div className='text-center py-3'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>

  </footer>
  
  
  </>
}
