import * as React from 'react';
import Modal from '@mui/material/Modal';
import {FaTimes} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'; 

import { CustomIconButton } from '../../Component/FormUtils/FormUtils';
import { FillButton } from '../../Component/FormUtils/FormUtils';
import { approveApplicationThunk, getAllMembersThunk } from '../../Store/members';
import DeleteBox from '../../Component/DeleteBox'


export default function ViewApplication({open, handleClose, selectedUser}) {
    const dispatch = useDispatch()
    const store = useSelector(state => state.member)

    const handleApprove = () => {
        if (selectedUser.status === undefined){
            toast.error('You can\'t approve user with no document')
        }else{

            dispatch(approveApplicationThunk({id: selectedUser._id}))
            .then(()=>{
                handleClose()
                toast.success('User Approved')
                dispatch(getAllMembersThunk())
            })
        }

    }

    const [openBox, setOpenBox] = React.useState(false);



  const handleClickOpen = () => {
    setOpenBox(true);
  };

  const handleCloseBox = () => {
    setOpenBox(false);
  };


  return (
    <div>
        <DeleteBox open={openBox}
        handleClose={handleCloseBox} 
        title={'Approve User'} 
        body={'By clicking continue the you can un do this action'}
        deleteFunction={handleApprove}
        loading={store.approveApplicationLoading}
        />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       {selectedUser !== null && <div className='w-[90%] h-[97%] flex flex-col gap-2 bg-[white] m-auto mt-2'>

            <div className='h-[100px] bg-secondary-dark flex justify-end items-start'>
                <CustomIconButton Icon={FaTimes} callBack={handleClose}/>
            </div>

            <div className='flex mx-14 mt-[-50px]  gap-16'>
                <div className='flex flex-col border-1 border-border-color gap-6 shadow-sm w-[75%] p-3 bg-[white] rounded-md'>
                    <FlexCom>
                        <p>Name:</p>
                        <p>{`${selectedUser.personalDetails.firstName} ${selectedUser.personalDetails.lastName}`}</p>
                    </FlexCom>
                
                    <FlexCom>
                        <p>Email:</p>
                        <p>{selectedUser.personalDetails.email} </p>
                    </FlexCom>
                </div>

                <div className='shadow-sm border-border-color rounded-md bg-[white]'>
                    <img className='h-[150px] w-[150px]' src={
                        selectedUser.personalDetails.passport === undefined ? "./images/avatar.png" : 
                        selectedUser.personalDetails.passport.secureUrl === 'none' ? "./images/avatar.png" : selectedUser.personalDetails.passport.secureUrl} alt="" />
                </div>

            </div>

            <div className='border-1 border-border-color rounded-sm w-[90%] flex flex-wrap gap-4 px-4 pt-4 m-auto max-h-[60%] overflow-y-auto'>
                {selectedUser.supportingDoc !== undefined && selectedUser.supportingDoc.map(val => {
                    return <DocCard header={val.docType} link={(val.doc.secureUrl !== undefined || val.doc.secureUrl !== 'none') ? val.doc.secureUrl : 'none'  }/>

                })}
               

            </div>

            <div className='flex gap-10 w-[90%] m-auto mb-6'>
                <FillButton text={'Approve'} callBack={handleClickOpen}/>
                <FillButton text={'Reject'} bg='#B90707' hoverBg='#f61616'/>
            </div>

       </div>}
      </Modal>
    </div>
  );
}

const FlexCom = ({children}) => {
    return (
        <div className='flex gap-10'>
            {children[0]}
            {children[1]}
        </div>
    )
}

const DocCard = ({header,link}) => {
    return (
        <a href={link !== 'none' ? link : ''} target='blank'>

            <div className='flex flex-col items-center gap-1 hover:cursor-pointer hover:shadow-lg'>
                <p>{header}</p>
                <img className='h-[200px] w-[185px] p-2 rounded-sm border-1 border-border-color' src={'./images/document.png'} alt="" />
            </div>
        </a>
    )
}