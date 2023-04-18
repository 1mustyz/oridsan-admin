import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'

const Slider = () => {
  return (
    <MainLayout presentLink={'slider'}>
        <PaddingLayout>
            <div className='flex flex-col gap-3'>

                <div className='p-4 rounded-sm flex flex-col gap-5 bg-[white]'>
                    <p className='text-[18px]'>Add Home page slider</p>

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
                                        <Text text={'Header'}/>
                                        <Field size='small' conWidth='500px'  name='paymentType' placeholder='Enter Header Title'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Browse Image'}/>
                                        <Field size='small' type={'number'} conWidth='400px' name='amount' placeholder='upload image'/>
                                    </TextAndField>

                                   
                                </div>
                                <Field size='small' multiline={true} maxRows={4} conWidth='940px' name='duration' placeholder='Description'/>
                                <FillButton width={'150px'} text={'Add'}/>
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

export default Slider