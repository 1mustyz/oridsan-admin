import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CircularProgress, Switch } from '@mui/material';

import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import { getPresidentThunk, deletePresidentThunk, makeCurrentPresidentThunk } from '../../Store/president';
import AppLoader from '../../Component/AppLoader';
import DeleteBox from '../../Component/DeleteBox';

export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.president);

  useEffect(()=>{
    dispatch(getPresidentThunk())
  },[])


  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeletId] = React.useState('');

  const deleteFunction = () => {
    dispatch(deletePresidentThunk(deleteId))
    .then(()=>{
      handleClose()
      toast.success('President deleted')
      dispatch(getPresidentThunk())
    })
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false)

  const handleChangeCurrent = (id) => {
    setIsLoading(true)
    dispatch(makeCurrentPresidentThunk(id))
    .then(val => {
      setIsLoading(false)
      dispatch(getPresidentThunk())
    })
  }

   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>

      <DeleteBox open={open}
       handleClose={handleClose} 
       title={'Delete A President'} 
       body={'By clicking continue the president in question will be deleted'}
       deleteFunction={deleteFunction}
       loading={store.deletePresidentLoading}
       />

      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'Name'}/>
              <TableCellWithBorder text={'Message'}/>
              <TableCellWithBorder text={'Current'}/>
              <TableCellWithBorder text={'Action'}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.presidents.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellWithBorder text={index + 1}/>

                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCellWithBorder text={row.message}/>
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <Switch checked={row.current} onChange={()=>handleChangeCurrent(row._id)}/>
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
