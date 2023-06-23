import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Authaxios} from '../utils/axiosInstance'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {

const [name, setname] = useState('');
// const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [month, setMonth] = useState('');
const [day, setDay] = useState('');
const [year, setYear] = useState('');
const [loading, setLoading] = useState(false);

const redirect = useNavigate()

const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 5000));

// console.log(name)
  async function handleRegistration(e){
    setLoading(true)
    try {
      if( !name || !phone || !month || !day || !year){
        // console.log('All fields must be filled correctly and cannot be empty');
        toast.warn('All fields must be filled correctly and cannot be empty')
        setLoading(false)
      }else{
        const res = await Authaxios({
          url: 'register',
          method:'post',
          data: {name, phone, month, day, year}
        });
  
        toast.promise(resolveAfter3Sec,
          {
            pending: 'Promise is pending',
          }
      )
        
        const message =  await res.data;
        setLoading(false)
        console.log(message)
        redirect('/login')
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
        <div className='flex flex-col gap-4 rounded-md p-4 pb-6'>

            <Link to='/' className='self-end mt-52 text-2xl'><i className="fa-solid fa-square-xmark"></i></Link>
            <img src='https://raw.githubusercontent.com/josephDev123/Shortchase/master/client/src/assets/images/shortchase-logo.png' alt='' className='w-32 h-32 self-center'/>
            <hr/>

            <label>Create your Account</label>
            <input type='text' className='w-full p-3 border rounded-md' placeholder='name' onChange={(e)=>setname(e.target.value)}/>
            <input type='tel' className='w-full  p-3 border rounded-md' placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
            <Link to='/login' className='text-blue-500'>Use email instead</Link>

            <p className='font-medium'>Date of Birth</p>
            <p className='w-4/5 sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 '>This would not be shown publicly. Confirm your age, even if this account is for a business, a pet or 
                something else
            </p>
            
            <div className='flex justify-between gap-3'>
                <input type='text' placeholder='Month' className='border-2 w-1/2 p-3 rounded-xl' onChange={(e)=>setMonth(e.target.value)}/> 

                <input type='number' placeholder='Day' className='border-2 w-1/4 p-3 rounded-xl' onChange={(e)=>setDay(e.target.value)}/> 
               

                <input type='number' placeholder='Year' className='border-2 w-1/3 p-3 rounded-xl' onChange={(e)=>setYear(e.target.value)}/> 
              
            </div>
            <button type='button' onClick={handleRegistration} className='w-full bg-yellow-300 rounded-full p-3 text-slate-900 font-extrabold mt-6 text-center'>Next</button>
            <ToastContainer/>
        </div>
        
    </div>
  )
}
