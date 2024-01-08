import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
const Blogs = () => {

   const {posts,loading} =useContext(AppContext);

  return (
    <div className=' w-11/12 mt-24 max-w-[670px] bg-[#AAC4FF] px-8 py-8 
                   flex flex-col gap-y-4 mb-20 items-center justify-center h-full'>
       {
        loading ? 
           (<Spinner/>) 
           :
            ( posts.length === 0 ? 
              (
             <div>
                <p>No Data Found</p>
             </div> 
           ) : 
           (posts.map(  (post)=>(
              <div key={post.id} >
                <p className='text-[#1e516a] font-bold text-2xl'>
                  {post.title}
                </p>
                <p className='text-[12px]  '>
                  By <span className='text-[#4d50e8] font-bold italic '> {post.author}</span > on <span className='text-[#4d50e8] underline font-bold' >{post.category}</span>
                </p>
                <p className='text-[12px]'>
                  Posted On <span className='underline '>{post.date}</span>
                </p>
                <p className='text-base'>
                  {post.content}
                </p>
               <div className='flex flex-wrap gap-2 '>
                {post.tags.map( (tag,index) =>{
                  return  <span key={index} className='text-blue-500  underline font-bold text-sm cursor-pointer'>{ ` #${tag}`}</span>
                })}
               </div>
              </div>
           ) ))
          )
       }
    </div>
  )
}

export default Blogs