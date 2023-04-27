import React,{useState} from 'react'

import MainLayout from '../../Component/MainLayout/MainLayout'
import { DataTable } from './DataTable'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import CustomSearch from '../../Component/CustomSearch'
import {OutlinedButton} from '../../Component/FormUtils/FormUtils'

const ViewStaff = () => {
    const [searchValue, setSearchValue] = useState('')
  return (
    <MainLayout presentLink={'view-staff'}>
        <PaddingLayout>
            <div className='flex flex-col p-6 gap-3 bg-[white]'>
                <p>View Staff</p>

                <DataTable/>

                {/* <div className='flex self-end'>
                    <OutlinedButton text={'prev'}/>
                    <p className='bg-primary text-[white] px-5 py-1 '>1</p>
                    <OutlinedButton text={'next'}/>

                </div> */}

            </div>

        </PaddingLayout>

    </MainLayout>
  )
}

export default ViewStaff