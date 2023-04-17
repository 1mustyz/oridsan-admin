import React from 'react'
import {BsSearch} from 'react-icons/bs'

const CustomSearch = ({searchValue='', searchStyle='w-[50%]', handleChange=()=>{}}) => {
  return (
    <div className={`p-[5px] rounded-md border-1 border-border-color flex items-center gap-[10px] ${searchStyle} `}>
        <div className='text-[14px]'>
            <BsSearch />
        </div>
        <input 
            className='border-none bg-transparent  outline-none w-[80%] text-[14px]'
            type="text" placeholder="Search" 
            value={searchValue}
            onChange={handleChange}
        />
    </div>
  )
}

export default CustomSearch