import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    // console.log(error)
  return (
    <div className='h-screen flex flex-col justify-center items-center w-4/5 mx-auto'>
      <h3 className='text-2xl font-medium'>Oops</h3>
       <p>Something went wrong because</p>
       <p>{error.statusText}</p>
    </div>
  )
}
