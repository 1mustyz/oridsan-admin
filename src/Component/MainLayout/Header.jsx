import React from 'react'
import Logo from '../Logo'
import {AiOutlineLogout} from 'react-icons/ai'
import { CustomIconButton } from '../FormUtils/FormUtils'
import { Storage } from '../../Network/StorageClass/StorageClass'
import { useNavigate } from 'react-router'


const storage = new Storage()
const Header = ({open}) => {
  const navigate = useNavigate()

  const handleCallBack =() => {
    storage.clearStorage()
    navigate('/')

  }

  const date = new Date().toDateString().split(' ').splice(0,4).join(' ')
  return (
    <div className='flex justify-between items-center w-[100%]'>
        {!open && <Logo />}
        <p>{date}</p>

        <div className='flex gap-4 text-[24px]'>
          <CustomIconButton Icon={AiOutlineLogout} callBack={handleCallBack}/>
        </div>
    </div>
  )
}

export default Header