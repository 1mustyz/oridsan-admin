import React from 'react'
import { Formik } from 'formik'

import Logo from '../../Component/Logo'
import {Text, TextAndField, Field, FillButton} from '../../Component/FormUtils/FormUtils' 

const Login = () => {
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
            }}>
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

                    <FillButton text={'Sign in'} width={'200px'}/>
                  </div>
                )}

            </Formik>
        </div>

    </div>
  )
}

export default Login