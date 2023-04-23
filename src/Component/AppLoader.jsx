import React from 'react'
import { CircularProgress } from '@mui/material'

const AppLoader = ({children, loading=false}) => {
  return (
    <div>
        {loading && <div className='w-[100%] flex justify-center mt-4'><CircularProgress/></div>}
        {!loading && children}
    </div>
  )
}

export default AppLoader