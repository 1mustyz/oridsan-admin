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
import { getNewsThunk, deleteNewsThunk } from '../../Store/news';
import AppLoader from '../../Component/AppLoader';
import DeleteBox from '../../Component/DeleteBox';

export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.news);

  useEffect(()=>{
    dispatch(getNewsThunk())
  },[])


  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeletId] = React.useState('');

  const deleteFunction = () => {
    dispatch(deleteNewsThunk(deleteId))
    .then(()=>{
      handleClose()
      toast.success('News deleted')
      dispatch(getNewsThunk())
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
       title={'Delete A News'} 
       body={'By clicking continue the news in question will be deleted'}
       deleteFunction={deleteFunction}
       loading={store.deleteNewsLoading}
       />

      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'Header'}/>
              <TableCellWithBorder text={'Description'}/>
              <TableCellWithBorder text={'Picture'}/>
              <TableCellWithBorder text={'Action'}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.news.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellWithBorder text={index + 1}/>

                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCellWithBorder text={row.description}/>
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <a href={row?.photo?.secureUrl} target="_blank">Click to view photo</a>
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
