import React from 'react'
import Logo from '../Logo'
import {AiOutlineBell} from 'react-icons/ai'
import {IoPersonCircleSharp} from 'react-icons/io5'

const Header = ({open}) => {
  const date = new Date().toDateString().split(' ').splice(0,4).join(' ')
  return (
    <div className='flex justify-between items-center w-[100%]'>
        {!open && <Logo />}
        <p>{date}</p>

        <div className='flex gap-4 text-[24px]'>
            <AiOutlineBell />
            <IoPersonCircleSharp />
        </div>
    </div>
  )
}

export default Header