import React from 'react'
import { Formik } from 'formik'

import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {TextAndField, Text, Field, FieldSelect, FillButton} from '../../Component/FormUtils/FormUtils'

const AddStaff = () => {
  return (
    <MainLayout presentLink={'add-staff'}>
        <PaddingLayout>
               
            <div>
                <Formik initialValues={{
                    customerName: ``,
                    amount: 0,
                    remarks: '',
                }}>
                    {(props)=> (

                        <div className='flex flex-col items-center bg-[white] w-[98%] gap-5 m-auto p-10'>
                            <div className='self-start flex flex-col gap-3 ml-[80px]'>
                                <p className=' text-[16px]'>Add staff</p>
                                <p className='text-[18px]'>Personal Information</p>
                            </div>


                            <FormFlexRow>

                                <FormFlexCol>

                                    <TextAndField space={0.5}>
                                        <Text text={'Title'}/>
                                        <FieldSelect callback={()=>{}}
                                        list={[]} value={props.values.remarks}
                                        //   height='55px'
                                          width={'400px'} 
                                        placeholder='Select title' 
                                        name='remarks'/>
                                    </TextAndField>

                                    <TextAndField space={0.5}>
                                        <Text text={'First Name'}/>
                                        <Field size='small' conWidth={'400px'} name='customerName' placeholder='First Name'/>
                                    </TextAndField>

                                    
                                </FormFlexCol>

                                <FormFlexCol>
                                    <TextAndField space={0.5}>
                                        <Text text={'Title'}/>
                                        <FieldSelect callback={()=>{}}
                                        list={[]} value={props.values.remarks}
                                        //   height='55px'
                                        width={'400px'} 
                                        placeholder='Select title' 
                                        name='remarks'/>
                                    </TextAndField>

                                    <TextAndField space={0.5}>
                                        <Text text={'First Name'}/>
                                        <Field size='small' conWidth={'400px'} name='customerName' placeholder='First Name'/>
                                    </TextAndField>
                                </FormFlexCol>

                            </FormFlexRow>

                            <TextAndField space={0.5}>
                                <Text text={'Email address'}/>
                                <Field size='small' conWidth={'1000px'}  name='customerName' placeholder='Enter email address here..'/>
                            </TextAndField>

                            <FormFlexRow>

                                <FormFlexCol >
                                    <TextAndField space={0.5}>
                                        <Text text={'Gender'}/>
                                        <FieldSelect callback={()=>{}}
                                        list={[]} value={props.values.remarks}
                                        //   height='55px'
                                          width={'400px'} 
                                        placeholder='Select Gender' 
                                        name='remarks'/>
                                    </TextAndField>

                                    <TextAndField space={0.5}>
                                        <Text text={'Zone'}/>
                                        <FieldSelect callback={()=>{}}
                                        list={[]} value={props.values.remarks}
                                        //   height='55px'
                                        width={'400px'} 
                                        placeholder='Select zonal region ' 
                                        name='remarks'/>
                                    </TextAndField>

                                    
                                </FormFlexCol>

                                <FormFlexCol >
                                    <TextAndField space={0.5}>
                                        <Text text={'Phone Number'}/>
                                        <Field size='small' conWidth={'400px'} name='customerName' placeholder='+234:'/>
                                    </TextAndField>

                                    <TextAndField space={0.5}>
                                        <Text text={'State'}/>
                                        <FieldSelect callback={()=>{}}
                                        list={[]} value={props.values.remarks}
                                        //   height='55px'
                                        width={'400px'} 
                                        placeholder='Select State' 
                                        name='remarks'/>
                                    </TextAndField>
                                </FormFlexCol>



                            </FormFlexRow>
                            <div className='self-end'><FillButton text={'Add staff'}/></div>
                            
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