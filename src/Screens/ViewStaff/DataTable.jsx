import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import { getStaffsThunk, deleteStaffThunk, grandStaffThunk, revokeStaffThunk } from '../../Store/staff';
import AppLoader from '../../Component/AppLoader'
import CustomSearch from '../../Component/CustomSearch';
import DeleteBox from '../../Component/DeleteBox';

export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.staff)
  const [tempData, setTempData] = useState(store.staffs)


  useEffect(()=> {
    dispatch(getStaffsThunk()).then((val)=>{
      setTempData(val.payload.data)
    })
  },[])

  const [searchValue, setSeachValue] = useState('')

  const handleSearchValue = (value) => {
    setSeachValue(value)
    if(value.length >= 3){
      const pattern = new RegExp(`\D*${value}\D*`,'i')
      setTempData(store.staffs.filter(val => 
        (val.personalDetails.firstName.match(pattern) ||  val.personalDetails.lastName.match(pattern)) || val.personalDetails.email.match(pattern)))

    }

    if(value.length < 3){
      setTempData(store.staffs)
    }

  }


  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeletId] = React.useState('');

  const deleteFunction = () => {
    dispatch(deleteStaffThunk(deleteId))
    .then(()=>{
      handleClose()
      toast.success('Staff deleted')
      dispatch(getStaffsThunk()).then((val)=>{
        setTempData(val.payload.data)
      })
    })
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false)

  const handleChangeRole = (id, isAdmin) => {
    setIsLoading(true)
    if(isAdmin){
      dispatch(revokeStaffThunk(id))
      .then(val => {
        setIsLoading(false)
        dispatch(getStaffsThunk())
        .then((val)=>{
          setTempData(val.payload.data)
        })
      })
    }else{
      dispatch(grandStaffThunk(id))
      .then(val => {
        setIsLoading(false)
        dispatch(getStaffsThunk())
        .then((val)=>{
          setTempData(val.payload.data)
        })
      })
    }

  }

   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>

      <DeleteBox open={open}
       handleClose={handleClose} 
       title={'Delete A Staff'} 
       body={'By clicking continue the staff in question will be deleted'}
       deleteFunction={deleteFunction}
       loading={store.deleteStaffLoading}
       />

      <div className='my-3'>
        <CustomSearch searchValue={searchValue} handleChange={(e)=>handleSearchValue(e.target.value)}/>

      </div>
      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'Name'}/>
              <TableCellWithBorder text={'Email'}/>
              <TableCellWithBorder text={'Title'}/>
              <TableCellWithBorder text={'Role'}/>
              <TableCellWithBorder text={'Make Admin'}/>
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
                  {`${row.personalDetails.firstName} ${row.personalDetails.lastName}`}
                </TableCell>
                <TableCellWithBorder text={row.personalDetails.email}/>
                <TableCellWithBorder text={row.personalDetails?.title}/>
                <TableCellWithBorder text={row.role.join(',')}/>
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <Switch checked={row.role.includes('Admin')} onChange={()=>handleChangeRole(row._id, row.role.includes('Admin'))}/>
                  {isLoading && <CircularProgress size={10}/>}
                </TableCell>
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <CustomIconButton iconStyle={'text-[red]'} callBack={()=>{handleClickOpen(); setDeletId(row._id)}} Icon={DeleteIcon}/>
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
