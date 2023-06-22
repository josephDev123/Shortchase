import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function RootLayout({children}) {
  return (
    <>
        <nav className='flex gap-3 mx-auto w-4/5 mb-8'>
            <Link to='/'  className='hover:text-teal-300'>Home</Link>
            <Link to='/posts' className='hover:text-teal-300'>post</Link>
            <Link to='/comments' className='hover:text-teal-300'>comment</Link>
        </nav>
        <Outlet/>
    </>
  )
}

