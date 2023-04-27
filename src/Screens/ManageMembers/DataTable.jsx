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
import {FieldSelectWithOutFormik} from '../../Component/FormUtils/FormUtils'
import CustomSearch from '../../Component/CustomSearch'



export const DataTable = () => {

  const dispatch = useDispatch()
  const store = useSelector((state)=> state.member)
  const [tempData, setTempData] = useState(store.members)
  
  useEffect(()=>{
    dispatch(getAllMembersThunk()).then((val)=>{
      setTempData(val.payload.data)
    })
  },[])

  const [selectedUser, setSelectedUser] = useState(null)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectFilter, setSelectFilter] = useState('all')
  const [searchValue, setSeachValue] = useState('')

  const handleSelectFilter = (value) => {
    setSelectFilter(value)
    if (value === 'all'){
      setTempData(store.members)
    }
    else if(value === 'approved'){
      setTempData(store.members.filter(val => val.status !== undefined && val.status === 'Approved'))
    }
    else if(value === 'pending'){
      setTempData(store.members.filter(val => val.status !== undefined && val.status === 'Pending'))
    }
    else if(value === 'notSubmited'){
      setTempData(store.members.filter(val => val.status === undefined))
    }
  }

  const handleSearchValue = (value) => {
    setSeachValue(value)
    setSelectFilter('all')
    if(value.length >= 3){
      const pattern = new RegExp(`\D*${value}\D*`,'i')
      setTempData(store.members.filter(val => 
        (val.personalDetails.firstName.match(pattern) ||  val.personalDetails.lastName.match(pattern)) || val.personalDetails.email.match(pattern)))

    }

    if(value.length < 3){
      setTempData(store.members)
    }

  }

   
  return (
    <TableContainer className='h-[80vh] bg-[white] overflow-y-auto'>
      {open && <ViewApplication open={open} handleClose={handleClose} selectedUser={selectedUser}/>}

      <div className='my-3 flex gap-3'>
        <CustomSearch searchValue={searchValue} handleChange={(e)=>handleSearchValue(e.target.value)}/>

        <FieldSelectWithOutFormik 
        width='150px'
        list={[
          {id:'all', name:'All'},
          {id:'approved', name:'Approved'},
          {id:'pending', name:'Pending'},
          {id:'notSubmited', name:'Not Submited'},
        ]} 
        callback={(e)=>{handleSelectFilter(e.target.value)}} value={selectFilter}
        />

      </div>

      
      <AppLoader loading={store.loading}>
        {tempData.length > 0 && <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            {tempData.map((row,index) => (
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
        </Table>}

      </AppLoader>

    </TableContainer>
  );
}

const TableCellWithBorder = ({text}) => {
  return (
    <TableCell className='border-1 border-border-color'>{text}</TableCell>

  )
}
