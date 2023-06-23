import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Authaxios } from '../utils/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function login() {

const[names, setName]= useState('');
const [phone, setPhone] = useState('')

const redirect = useNavigate()
const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 5000));

  async function handleUserLogin(){
    try {
      if(!names || !phone){
        // console.log('Field(s) is empty')
        toast.warn("Field(s) is empty!");
      }else{
        const loginRequest = await Authaxios({
          method:'post',
          url:'login',
          data:{names, phone}
        })
        // loading alert
        toast.promise(resolveAfter3Sec,
          {
            pending: 'Promise is pending',
          }
      )
        const loginResult =  await loginRequest.data
        redirect('/')
      }
    } catch (error) {
      const {status, message} = await error.response.data
      if(!message){
        toast.error('🦄'+ error.message)
        // console.log(error.message)
      }else{
        // console.log(message)
        toast.error('🦄 '+message)
      }
    }
  }


  return (
    <div className='h-screen flex justify-center items-center w-4/5 mx-auto'>
      <div className='flex flex-col gap-5 p-4 w-3/4'>
          <img src='https://raw.githubusercontent.com/josephDev123/Shortchase/master/client/src/assets/images/shortchase-logo.png' alt='' className='w-32 h-32 mt-6 rounded-full self-center' />
          <h3 className='font-bold text-xl'>Login to Shortchase</h3>
          <input type='tel' placeholder='Enter your phone' className='border-2 p-3 rounded-xl w-full' onChange={(e)=>setPhone(e.target.value)}/>
          <input type='text' placeholder='Enter your name' className='border-2 p-3 rounded-xl w-full' onChange={(e)=>setName(e.target.value)}/>
          <p className='text-green-300'>Forget password</p>
          <button className='w-3/4 self-center bg-yellow-300 p-3 rounded-full font-bold' onClick={handleUserLogin}>Log in</button>
          <p className='text-center'>Dont't have an account? <Link to='/register' className='text-orange-300'>Sign Up</Link></p>
      </div>
      <ToastContainer/>
    </div>
  )
}
