import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'
import { CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'
import { uploadFile } from '../../Network/ServiceClass/File'
import { sliderSchema } from '../../Component/validationSchema'
import { createNewsThunk } from '../../Store/news'
import Error from '../../Component/Errors/Error'

const News = () => {
    const dispatch = useDispatch()
    const store = useSelector((state) => state.news);

    const [photo, setPhoto] = useState(null)
    const [publicId, setPublicId] = useState(null)
    const [isFileLoading, setIsFileLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const handlePhoto = (e) => {
        setIsFileLoading(true)
        const file = e.target.files[0]
        const formdata = new FormData();
        formdata.append('file', file);
        uploadFile(formdata).then(val => {
            setIsFileLoading(false)
            setPhoto(val.data.secureUrl)
            setPublicId(val.data.publicID)
            toast.success('Photo uploaded')

        }).catch(err => {
            console.log(err)
            setIsFileLoading(false)

        })
    }

    const handleSubmit = (values, actions) => {
        const data = {
            description: values.description,
            title: values.title,
            photo: {
                publicID: publicId,
                secureUrl: photo
            }

        }
        if(photo === null){
            setIsError(true)
            setErrMsg('You have to select an image')
        }else{
            dispatch(createNewsThunk(data))
            .then(()=>{
                actions.resetForm()
                toast.success('news created')
            })
        }
    }
  return (
    <MainLayout presentLink={'news'}>
        <PaddingLayout>
            <div className='flex flex-col gap-3'>

                <div className='p-4 rounded-sm flex flex-col gap-5 bg-[white]'>
                    <p className='text-[18px]'>Add News</p>

                    <Formik 
                    initialValues={{
                        description: '',
                        title: '',
                    }}
                    validationSchema={sliderSchema}
                    onSubmit={(values,actions)=> handleSubmit(values,actions)}>
                        {props => (
                            <div className='flex flex-col gap-4'>

                                <div className='flex gap-10'>
                                    <TextAndField>
                                        <Text text={'Title'}/>
                                        <Field size='small' conWidth='500px'  name='title' placeholder='Enter Header Title'/>
                                    </TextAndField>

                                    <div className='flex items-center gap-2'>
                                        <TextAndField>
                                            <Text text={'Browse Image'}/>
                                            <input className='border-1 rounded-md p-1 border-color' type={'file'} onChange={(e)=>handlePhoto(e)}  placeholder='upload image'/>
                                        </TextAndField>
                                        {isFileLoading && <CircularProgress size={'20px'} className='mt-[20px]'/>}
                                    </div>


                                   
                                </div>
                                <Field size='small' multiline={true} maxRows={4} conWidth='940px' name='description' placeholder='Description'/>
                                <div className='flex gap-2'>
                                    <FillButton width={'150px'} text={'Add'} isLoading={store.createNewsLoading} callBack={props.handleSubmit}/>

                                    {isError && <Error message={errMsg} handleClick={()=>setIsError(false)}/>}
                                </div>
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

export default News