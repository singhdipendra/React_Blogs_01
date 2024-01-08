import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Pagination = () => {

    const {page,handlerPageChange,totalPages}=useContext(AppContext); 

  return (
    <div className="flex justify-center items-center w-full py-2 border-t-2 h-12 border-b-gray-300 drop-shadow-md fixed bottom-0 inset-x-0 bg-[#B1B2FF]">
         <div className="w-11/12 max-w-[670px] flex flex-row  justify-evenly">
              
        <div className='flex flex-row gap-x-2'>
                  { 
           page > 1 && 
            <button onClick={() => handlerPageChange(page-1) } className='font-bold text-base uppercase  text-[#193441] rounded-sm px-3 border border-white ' >
                Previous
            </button>
           }
           { 
           page < totalPages  &&
                <button onClick={() => handlerPageChange(page+1)} className='font-bold text-base uppercase  text-[#193441] rounded-sm px-3 border border-white '>
                    Next
                </button>
           }
        </div>

          


           <p className='font-bold text-sm '>
             Page {page} of {totalPages}
           </p>
         </div>
    </div>
  )
}

export default Pagination