import React from 'react'
import {MdOutlineCancel} from 'react-icons/md'

const Error = ({message, handleClick}) => {
  return (
        <div className='flex flex-row text-[red] justify-center mt-1 p-1 rounded-md shadow-[0_3px_10px_rgb(0_0_0_/_0.2)]'>
          <p className='text-[12px] align-middle'>{message}</p>
          <MdOutlineCancel className='text-[23px] cursor-pointer' onClick={handleClick}/>
        </div>
  )
}

export default Error