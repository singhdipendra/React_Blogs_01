import React, { useContext, useEffect } from 'react'
import Header from './components/Header';
import Blogs from './components/Blogs'
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';


export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, [])

  
  
  return (
    <div >
      <Header />
      <div className='bg-[#D2DAFF] flex flex-col justify-center items-center'>
      <Blogs />
      <Pagination />
      </div>
      
    </div>
  )
}

export default App