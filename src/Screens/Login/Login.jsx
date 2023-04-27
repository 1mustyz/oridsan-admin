import React, {useState} from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

import Logo from '../../Component/Logo'
import {Text, TextAndField, Field, FillButton} from '../../Component/FormUtils/FormUtils' 
import {login} from '../../Network/ServiceClass/Auth'
import Error from '../../Component/Errors/Error'
import { Storage } from '../../Network/StorageClass/StorageClass'
import { loginSchema } from '../../Component/validationSchema'



const storage = new Storage()
const Login = () => {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (value) =>{
    setIsLoading(true)

    login(value).then(val => {
      const role = val.data.data.role
      setIsLoading(false)
      if(role !== undefined && (role.includes('Staff') || role.includes('Admin'))){
        const data = {
          user: val.data.data.personalDetails,
          token: val.data.token
        }
  
        storage.AuthStorage(data)
  
        navigate('/home')

      }else{
        toast.error('You are not allow access!')
      }

    }).catch(err => {
      setIsLoading(false)
      setErrorMsg(err.response.data.message)
      setIsError(true)
    })

  }

  return (
    <div className='bg-[#DDDDDD] w-[100vw] h-[100vh] pt-[100px]'>

        <div className='w-[65%] m-auto bg-[white] h-[450px] p-10 rounded-md flex flex-col gap-8 items-center'>

            <Logo style={'w-[130px] h-[35px]'} />

            <div className='self-start flex flex-col gap-2'>

              <p className='text-[20px] font-semibold'>Sign in to ORIDSAN Admin</p>
              <p className='text-[12px]'>To sign in, please type in the email address linked to your ORIDSAN account and your ORIDSAN password.</p>
            </div>


            <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={(value)=>handleSubmit(value)}>
                {props => (
                  <div className='self-start flex flex-col gap-3'>
                    <TextAndField>
                      <Text text={'Email Address'}/>
                      <Field variant="standard" size='small' name='email' conWidth='800px' placeholder='someone@example.com'/>
                    </TextAndField>

                    <TextAndField>
                      <Text text={'Password'}/>
                      <Field size='small' variant="standard" type={'password'} name='password' conWidth='800px' placeholder='type Password here...'/>
                    </TextAndField>

                    <p className='text-[12px]'>Forgot Password ? Reset it</p>

                    <div className='flex gap-3'>

                      <FillButton isLoading={isLoading} text={'Sign in'} width={'200px'} callBack={props.handleSubmit}/>
                      <div className='w-[200px]'>{isError && <Error message={errorMsg} handleClick={()=> {setIsError(false)}}/>}</div>
                    </div>
                  </div>
                )}

            </Formik>
        </div>

    </div>
  )
}

export default Login