import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'

const ManageMembers = () => {
  return (
    <MainLayout presentLink={'manage-members'}>
        <PaddingLayout>
            <div className='bg-[white] p-3 rounded-sm'><DataTable/></div>

        </PaddingLayout>

    </MainLayout>
  )
}

export default ManageMembers