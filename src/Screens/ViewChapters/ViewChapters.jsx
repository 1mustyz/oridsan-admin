import React,{useState} from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createChapterThunk } from '../../Store/chapter'
import { toast } from 'react-toastify'

import MainLayout from '../../Component/MainLayout/MainLayout'
import { DataTable } from './DataTable'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import CustomSearch from '../../Component/CustomSearch'
import Error from '../../Component/Errors/Error'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { chapterSchema } from '../../Component/validationSchema'


const ViewChapters = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.chapter)

    const [searchValue, setSearchValue] = useState('')
    const [isError, setIsError] = useState(false)
    const [errMsg, setErrorMsg] = useState('')

    const handleSubmit = (values, actions) => {
        console.log(values)
        dispatch(createChapterThunk(values))
        .then((val)=> {
            if (val.payload.isError) {
                setIsError(true)
                setErrorMsg(val.payload.response.data.message)

            }else{
                toast.success('Chapter created')
                actions.resetForm()
            }
        })

    }
  return (
    <MainLayout presentLink={'view-chapters'}>
        <PaddingLayout>
            <div className='flex flex-col gap-3'>
                <div className='p-4 rounded-sm flex flex-col gap-5 bg-[white]'>
                    <p className='text-[18px]'>Add Chapters</p>

                    <Formik 
                    initialValues={{
                        chapterName: '',
                        address: '',
                        contact: ''
                    }}
                    validationSchema={chapterSchema}
                    onSubmit={(values,actions)=> handleSubmit(values,actions)}
                    >
                        {props => (
                            <div className='flex flex-col gap-4'>

                                <div className='flex gap-10'>
                                    <TextAndField>
                                        <Text text={'Chapter Name'}/>
                                        <Field size='small' name='chapterName' placeholder='Enter Chapter Name'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Address'}/>
                                        <Field size='small' name='address' placeholder='Enter Address'/>
                                    </TextAndField>

                                    
                                    <TextAndField>
                                        <Text text={'Contact Info'}/>
                                        <Field size='small'  name='contact' placeholder='Enter Contact Info'/>
                                    </TextAndField>
                                </div>

                                <div className='flex gap-2'>
                                    <FillButton width={'150px'} text={'Add'} isLoading={store.createChapterLoading} callBack={props.handleSubmit}/>

                                    {isError && <Error message={errMsg} handleClick={()=>setIsError(false)}/>}
                                </div>
                            </div>
                        )}
                    </Formik>
                            
                </div>
                
                <div className='flex flex-col p-6 gap-3 bg-[white]'>
                    <p>View Chapters</p>

                    <CustomSearch searchValue={searchValue} handleChange={(e)=>setSearchValue(e.target.value)}/>

                    <DataTable/>

                    {/* <div className='flex self-end'>
                        <OutlinedButton text={'prev'}/>
                        <p className='bg-primary text-[white] px-5 py-1 '>1</p>
                        <OutlinedButton text={'next'}/>

                    </div> */}

                </div>

            </div>

        </PaddingLayout>

    </MainLayout>
  )
}

export default ViewChapters