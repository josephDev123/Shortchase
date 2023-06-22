import React from 'react'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <div className='h-screen flex justify-center items-center w-4/5 mx-auto'>
      <div className='flex flex-col gap-5 p-4 w-1/2'>
          <img src='https://raw.githubusercontent.com/josephDev123/Shortchase/master/client/src/assets/images/shortchase-logo.png' alt='' className='w-32 h-32 mt-6 rounded-full self-center' />
          <h3 className='font-bold text-xl'>Login to Shortchase</h3>
          <input type='email' className='border-2 p-3 rounded-xl w-full'></input>
          <input type='password' className='border-2 p-3 rounded-xl w-full'></input>
          <p className='text-green-300'>Forget password</p>
          <button className='w-3/4 self-center bg-yellow-300 p-3 rounded-full font-bold'>Log in</button>
          <p className='text-center'>Dont't have an account? <Link to='/register' className='text-orange-300'>Login in</Link></p>
      </div>
    </div>
  )
}
