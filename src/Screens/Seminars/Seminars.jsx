import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'
import { seminarSchema } from '../../Component/validationSchema'
import {createConferenceThunk} from '../../Store/conference'



const Seminars = () => {

    const dispatch = useDispatch()
    const store = useSelector((state) => state.conference);

    const handleSubmit = (value,action) => {
        const data ={
            title: value.title,
            description: value.description,
            date: value.date,
            time: value.time,
            cost: value.amount.toString(),
            venue: value.location,
            }
        dispatch(createConferenceThunk(data))
        .then(()=>{
            action.resetForm()
            toast.success('Event created')
        })
    
    }


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
                        description: '',
                        title: '',
                        amount: '',
                        date: '',
                        time: '',
                        location:''
                    }}
                    validationSchema={seminarSchema}
                    onSubmit={(value,action)=> handleSubmit(value,action)}>
                        {props => (
                            <div className='flex flex-col gap-4'>

                                    <TextAndField>
                                        <Text text={'Description'}/>
                                        <Field maxRows={4} multiline={true} conWidth={'50%'} size='small' name='description' placeholder='Describe conference '/>
                                    </TextAndField>

                                <div className='flex gap-10'>
                                    <TextAndField>
                                        <Text text={'Title'}/>
                                        <Field size='small' name='title' placeholder='Enter conference '/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Location'}/>
                                        <Field size='small' name='location' placeholder='Enter location venue'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Set Date'}/>
                                        <Field size='small' conWidth='150px' type={'date'} name='date' placeholder='Enter Date'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Set Time'}/>
                                        <Field size='small' conWidth='100px' type={'time'} name='time' placeholder='Enter Time'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Set Amount'}/>
                                        <Field size='small' conWidth='200px' type={'number'} name='amount' placeholder='Enter Amount'/>
                                    </TextAndField>
                                </div>
                                <FillButton width={'150px'} isLoading={store.createConferenceLoading} text={'Add Conference'} callBack={props.handleSubmit}/>
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