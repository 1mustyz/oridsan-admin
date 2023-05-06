import React,{useState} from 'react'
import { Formik,} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {TextAndField, Text, Field, FieldSelect, FillButton} from '../../Component/FormUtils/FormUtils'
import { staffSchema } from '../../Component/validationSchema'
import { createStaffThunk } from '../../Store/staff'
import Error from '../../Component/Errors/Error'

const AddStaff = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.staff)

    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = (values, actions)=>{
        const {confirmPassword, ...data} = values
        data.role = [data.role]
            
        dispatch(createStaffThunk(data))
        .then((val)=> {
            if (val.payload.isError) {
                setIsError(true)
                setErrorMsg(val.payload.response.data.message)

            }else{
                toast.success('Staff created')
                actions.resetForm()
            }
        })
        

    }

  return (
    <MainLayout presentLink={'add-staff'}>
        <PaddingLayout>
               
            <div>
                <Formik initialValues={{
                    firstName: ``,
                    lastName: '',
                    email: '',
                    role: 'Admin',
                    title: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={staffSchema}
                onSubmit={(values, actions)=> handleSubmit(values, actions)}>
                    {(props)=> (

                        <div className='flex flex-col items-center bg-[white] w-[98%] gap-5 m-auto p-10'>
                            <div className='self-start flex flex-col gap-3 ml-[80px]'>
                                <p className=' text-[16px]'>Add staff</p>
                                <p className='text-[18px]'>Personal Information</p>
                            </div>


                            <FormFlexRow>

                                <TextAndField space={0.5}>
                                    <Text text={'First Name'}/>
                                    <Field size='small' conWidth={'400px'} name='firstName' placeholder='First Name'/>
                                </TextAndField>

                                <TextAndField space={0.5}>
                                    <Text text={'Last Name'}/>
                                    <Field size='small' conWidth={'400px'} name='lastName' placeholder='Last Name'/>
                                </TextAndField>

                            </FormFlexRow>

                            <TextAndField space={0.5}>
                                <Text text={'Email address'}/>
                                <Field size='small' conWidth={'1000px'}  name='email' placeholder='Enter email address here..'/>
                            </TextAndField>

                            <FormFlexRow>

                                <TextAndField space={0.5}>
                                    <Text text={'Password'}/>
                                    <Field size='small' conWidth={'400px'} type={'password'} name='password' placeholder='Password'/>
                                </TextAndField>

                                <TextAndField space={0.5}>
                                    <Text text={'ConfirmPassword'}/>
                                    <Field size='small' conWidth={'400px'} type={'password'} name='confirmPassword' placeholder='Confirm Password'/>
                                </TextAndField>


                            </FormFlexRow>

                            <FormFlexRow>

                                <TextAndField space={0.5}>
                                    <Text text={'Title'}/>
                                    <Field size='small' conWidth={'400px'} name='title' placeholder='Title'/>
                                </TextAndField>

                                <TextAndField space={0.5}>
                                    <Text text={'Select Role'}/>
                                    <FieldSelect
                                    list={[
                                        {id:'Admin', name:'Admin'},
                                        {id: 'Staff', name: 'Staff'}
                                    ]} value={props.values.role}
                                    //   height='55px'
                                    width={'400px'} 
                                    placeholder='Select a role' 
                                    name='role'/>
                                </TextAndField>
                            </FormFlexRow>

                            <div className='flex gap-3 self-end'>
                                {isError && <Error message={errorMsg} handleClick={()=> setIsError(false)}/>}
                                <FillButton isLoading={store.createStaffLoading} text={'Add staff'} callBack={props.handleSubmit}/>
                            </div>
                            
                        </div>

                    )}
                
                </Formik>
            </div>
        </PaddingLayout>

    </MainLayout>
  )
}

export default AddStaff

const FormFlexRow = ({children}) => {
    return (
        <div className='flex gap-[200px]'>
            {children}
        </div>
    )
}

const FormFlexCol = ({children}) => {
    return (
        <div className='flex flex-col gap-2'>
            {children}
        </div>
    )
}