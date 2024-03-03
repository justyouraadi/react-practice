import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col gap-y-3 p-3' > 
          <p className='bg-white px-20 text-center py-3 rounded-sm cursor-pointer' onClick={()=>{Navigate('/')}} >Home</p>
          <p>About</p>
          <p>Products</p>
          <p>Contact</p>
      </div>
    </>
  )
}

export default Sidebar
