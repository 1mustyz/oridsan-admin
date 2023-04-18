import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'

const Seminars = () => {
  return (
    <MainLayout presentLink={'seminar'}>
        <PaddingLayout>
            <div className='flex flex-col gap-3'>

                <div className='p-4 rounded-sm flex flex-col gap-5 bg-[white]'>
                    <p className='text-[18px]'>Add Conference/Seminar</p>

                    <div className='flex gap-2 items-center'>
                        <div className='p-3 text-[26px] bg-[#DDDDDD] rounded-full'><AiOutlinePlus/></div>
                        <p className='text-[14px]'>Add new Conference</p>
                    </div>

                    <Formik 
                    initialValues={{
                        paymentType: '',
                        amount: '',
                        duration:''
                    }}>
                        {props => (
                            <div className='flex flex-col gap-4'>

                                <div className='flex gap-10'>
                                    <TextAndField>
                                        <Text text={'Conference theme'}/>
                                        <Field size='small' name='paymentType' placeholder='Enter conference '/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Location'}/>
                                        <Field size='small' name='amount' placeholder='Enter location venue'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Set Date'}/>
                                        <Field size='small' conWidth='200px' type={'date'} name='duration' placeholder='Enter Maximum Duration'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Set Amount'}/>
                                        <Field size='small' name='duration' placeholder='Enter Amount'/>
                                    </TextAndField>
                                </div>
                                <FillButton width={'150px'} text={'Add Conference'}/>
                            </div>
                        )}
                    </Formik>
                    <div>

                    </div>
                </div>
                <div className='bg-[white] p-3 rounded-sm'><DataTable/></div>
                
                
            </div>

        </PaddingLayout>

    </MainLayout>
  )
}

export default Seminars