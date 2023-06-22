import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Authaxios} from '../utils/axiosInstance'

export default function register() {
const [name, setname] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [month, setMonth] = useState('');
const [day, setDay] = useState('');
const [year, setYear] = useState('');
const [loading, setLoading] = useState(false);

// console.log(name)
  async function handleRegistration(e){
    setLoading(true)
    e.preventDefault();
    try {
      if( !name || !phone || !month || !day || !year){
        console.log('All fields must be filled correctly and cannot be empty');
        setLoading(false)
      }
      const res = await Authaxios({
        url: 'register',
        method:'post',
        data: {name, phone, month, day, year}
      });
      
      const message =  await res.data;
      setLoading(false)
      console.log(message)
    } catch (error) {
       
      const {status, message} = await error.response.data
      console.log(status, message)
  
    }
  }
   


  return (
    <div className='h-screen flex justify-center items-center w-4/5 mx-auto'>
        <div className='flex flex-col gap-4 rounded-md  p-4 pb-6'>
            <Link to='/' className='self-end'><i className="fa-solid fa-square-xmark"></i></Link>
            <img src='/src/assets/images/shortchase-logo.png' alt='' className='w-32 h-32 self-center'/>
            <hr/>
            <label>Create your Account</label>
            <input type='text' className='w-full p-3 border rounded-md ' placeholder='name' onChange={(e)=>setname(e.target.value)}/>
            <input type='tel' className='w-full  p-3 border rounded-md' placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
            <Link to='' className='text-blue-500'>Use email instead</Link>
            <p className='font-medium'>Date of Birth</p>
            <p>This would not be shown publicly. Confirm your age,<br/> even if this account is for a business, a pet or 
                something else
            </p>
            <div className='flex justify-between gap-3'>
                <input type='text' placeholder='Month' className='border-2 w-full p-3' onChange={(e)=>setMonth(e.target.value)}/> 

                <input type='number' placeholder='Day' className='border-2 w-full p-3' onChange={(e)=>setDay(e.target.value)}/> 
               

                <input type='number' placeholder='Year' className='border-2 w-full p-3' onChange={(e)=>setYear(e.target.value)}/> 
              
            </div>
            <button onClick={handleRegistration} className='w-full bg-yellow-300 rounded-full p-3 text-slate-900 font-extrabold mt-6 text-center'>Next</button>
        </div>
    </div>
  )
}
