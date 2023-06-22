import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css'

export default function Index() {
  return (
    <div className='h-screen flex flex-col justify-center items-center landing_wrapper '>
      <div className='bg-slate-50  flex flex-col gap-4 justify-start items-center rounded-xl p-9'>
        <img src='/src/assets/images/shortchase-logo.png' alt='' className='w-16 h-16 mt-6 rounded-full bg-yellow-300' />
        <h3 className='font-bold'>Welcome to ShortChase</h3>
        <p>Predict what's ahead</p>
        <button className='bg-yellow-300 p-2 px-5 font-light text-xs w-5/6 rounded-full'>Sign up with phone or email</button>
        <p className='text-center w-80 text-xs'>By signing up, you agree to shortChase's<br/> <span className='font-bold'>term and condition</span> and acknowledge you have
          read our <br/><span className='font-bold'>privacy policies</span>, including <span className='font-bold'>cookie use</span>
        </p>

        <p>Have an Account? <Link to='/register' className='text-green-400 font-semibold'>Sign In</Link></p>
        <p>Get the app</p>
        <span className='flex gap-2'>
          <button className='border border-t-2 p-2'>
              <i class="fa-brands fa-apple"></i>
              Apple store
          </button>

          <button className='border border-t-2 p-2'>
          <i class="fa-brands fa-google-play text-green-500"></i>
              Google play 
          </button>
        </span>
      </div>
    </div>
  )
}
