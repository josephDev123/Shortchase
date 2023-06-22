import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

export default function Post() {
const posts = useLoaderData();
const smallPosts= posts.filter((value, i)=> i < 5)
console.log(smallPosts)

  return (
    <div className='flex flex-wrap gap-2 w-4/5 mx-auto'>
        {/* POST */}
        <React.Suspense fallback={<div> Loading ... </div>}>
            {smallPosts.map((value, i)=>(
            
                    <div id={value.id} key={value.id} className=' hover:bg-green-950 hover:text-slate-200 rounded-lg flex flex-col bg-green-500 h-52 basis-1/5 w-1/5 p-2'>
                        <h3 className='font-bold truncate'>{value.title}</h3>
                        <p className='text-sm'>{value.body}</p>
                    </div>
                
            ) )}

        </React.Suspense>
    </div>
  )
}
