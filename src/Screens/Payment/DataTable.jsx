import React,{useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {MdVisibility} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';


import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import { getAllMembersThunk } from '../../Store/members';
import AppLoader from '../../Component/AppLoader'
import ViewApplication from './ViewApplication';



export const DataTable = () => {

  const dispatch = useDispatch()
  const store = useSelector((state)=> state.member)

  useEffect(()=>{
    dispatch(getAllMembersThunk())
  },[])

  const [selectedUser, setSelectedUser] = useState(null)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>
      {open && <ViewApplication open={open} handleClose={handleClose} selectedUser={selectedUser}/>}
      
      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'First Name'}/>
              <TableCellWithBorder text={'Last Name'}/>
              <TableCellWithBorder text={'Email'}/>
              <TableCellWithBorder text={'Certificate'}/>
              <TableCellWithBorder text={'Status'}/>
              <TableCellWithBorder text={'Action'}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.members.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellWithBorder text={index + 1}/>

                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  {row.personalDetails.firstName}
                </TableCell>
                <TableCellWithBorder text= {row.personalDetails.lastName}/>
                <TableCellWithBorder text= {row.personalDetails.email}/>
                <TableCellWithBorder text= {row.certificateStatus}/>
                <TableCellWithBorder text= {row.status === undefined ? 'Not submitted' : row.status}/>

                
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <CustomIconButton Icon={MdVisibility} callBack={()=> {setSelectedUser(row); handleOpen()}}/>
                </TableCell>
                
              </TableRow>
            ))}
              
          </TableBody>
        </Table>

      </AppLoader>

    </TableContainer>
  );
}

const TableCellWithBorder = ({text}) => {
  return (
    <TableCell className='border-1 border-border-color'>{text}</TableCell>

  )
}
