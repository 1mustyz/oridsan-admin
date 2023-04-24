import React,{useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import AppLoader from '../../Component/AppLoader'
import DeleteBox from '../../Component/DeleteBox';
import { getChaptersThunk,deleteChapterThunk } from '../../Store/chapter';


export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.chapter)

  useEffect(()=>{
    dispatch(getChaptersThunk())
  },[])

  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeletId] = React.useState('');

  const deleteFunction = () => {
    dispatch(deleteChapterThunk(deleteId))
    .then(()=>{
      handleClose()
      toast.success('Chapter deleted')
      dispatch(getChaptersThunk())
    })
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>
      <DeleteBox open={open}
       handleClose={handleClose} 
       title={'Delete a Chapter'} 
       body={'By clicking continue the chapter in question will be deleted'}
       deleteFunction={deleteFunction}
       loading={store.deleteChapterLoading}
       />
      
      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'Chapter Name'}/>
              <TableCellWithBorder text={'Address'}/>
              <TableCellWithBorder text={'Contact'}/>
              <TableCellWithBorder text={'Action'}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.chapters.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellWithBorder text={index + 1}/>

                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  {row.chapterName}
                </TableCell>
                <TableCellWithBorder text={row.address}/>
                <TableCellWithBorder text={row.contact}/>
               
                <TableCell className='border-1 w-[155px] border-border-color' component="th" scope="row">
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
