import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Formik } from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify'


import MainLayout from '../../Component/MainLayout/MainLayout'
import PaddingLayout from '../../Component/MainLayout/PaddingLayout'
import {Field, TextAndField, FillButton, Text, FieldSelect} from '../../Component/FormUtils/FormUtils'
import { DataTable } from './DataTable'
import { membershipSchema } from '../../Component/validationSchema'
import { createMembershipThunk } from '../../Store/membership';



const Category = () => {

    const dispatch = useDispatch()
    const store = useSelector((state) => state.membership);

    const handleSubmit = (value,action) => {
        const data = {
            description: value.description,
            membershipCat: value.membership,
            price: value.price,
            documentTypes: value.documentTypes
        }
       
        dispatch(createMembershipThunk(data))
        .then(()=>{
            action.resetForm()
            toast.success('Membership created')
        })
        
    
    }


  return (
    <MainLayout presentLink={'membership'}>
        <PaddingLayout>
            <div className='flex flex-col gap-3'>

                <div className='p-4 rounded-sm flex flex-col gap-5 bg-[white]'>
                    <p className='text-[18px]'>Add Membership Category</p>

                    <div className='flex gap-2 items-center'>
                        <div className='p-3 text-[26px] bg-[#DDDDDD] rounded-full'><AiOutlinePlus/></div>
                        <p className='text-[14px]'>Add new membership</p>
                    </div>

                    <Formik 
                    initialValues={{
                        description: '',
                        membership: '',
                        price: '',
                        documentTypes: []
                    }}
                    validationSchema={membershipSchema}
                    onSubmit={(value,action)=> handleSubmit(value,action)}>
                        {props => (
                            <div className='flex flex-col gap-4'>

                                <div className='flex gap-10'>
                                    <TextAndField>
                                        <Text text={'membership'}/>
                                        <Field size='small' name='membership' placeholder='Enter conference '/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Description'}/>
                                        <Field size='small' name='description' placeholder='Enter Description'/>
                                    </TextAndField>

                                   
                                    <TextAndField>
                                        <Text text={'Set Price'}/>
                                        <Field size='small' conWidth='200px' type={'number'} name='price' placeholder='Enter Price'/>
                                    </TextAndField>

                                    <TextAndField>
                                        <Text text={'Select Document'}/>
                                        <FieldSelect
                                            multiple={true}
                                            list={[
                                                {id:'Undergraduate', name:'Undergraduate'},
                                                {id: 'Postgraduate', name: 'Postgraduate'},
                                            ]} value={[]}
                                            //   height='55px'
                                            width={'200px'} 
                                            placeholder='Select Documents' 
                                            name='documentTypes'/>
                                    </TextAndField>
                                </div>
                                <FillButton width={'150px'} isLoading={store.createMembershipLoading} text={'Add Membership'} callBack={props.handleSubmit}/>
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

export default Category