import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'

const Payment = () => {
  return (
    <MainLayout presentLink={'payment'}>
        <PaddingLayout>
            <div className='flex flex-col gap-3'>

                <div className='p-4 rounded-sm flex flex-col gap-5 bg-[white]'>
                    <p className='text-[18px]'>Add payment</p>

                    <div className='flex gap-2 items-center'>
                        <div className='p-3 text-[26px] bg-[#DDDDDD] rounded-full'><AiOutlinePlus/></div>
                        <p className='text-[14px]'>Add new payment type</p>
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
                                        <Text text={'Payment Type'}/>
                                        <Field size='small' conWidth='500px'  name='paymentType' placeholder='Input Payment..'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Amount'}/>
                                        <Field size='small' type={'number'} name='amount' placeholder='Input Payment..'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Duration'}/>
                                        <Field size='small' name='duration' placeholder='Enter Maximum Duration'/>
                                    </TextAndField>
                                </div>
                                <FillButton width={'150px'} text={'Add Payment'}/>
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

export default Payment