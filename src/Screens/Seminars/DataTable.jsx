import React,{useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import {FaRegEdit} from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';


import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import {getConferencesThunk, deleteConferenceThunk} from '../../Store/conference'
import AppLoader from '../../Component/AppLoader';
import DeleteBox from '../../Component/DeleteBox';


export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.conference);


  useEffect(()=>{
    dispatch(getConferencesThunk())
  },[])

  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeletId] = React.useState('');

  const deleteFunction = () => {
    dispatch(deleteConferenceThunk(deleteId))
    .then(()=>{
      handleClose()
      toast.success('Conference deleted')
      dispatch(getConferencesThunk())
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
       title={'Delete A Conference'} 
       body={'By clicking continue the conference in question will be deleted'}
       deleteFunction={deleteFunction}
       loading={store.deleteConferenceLoading}
       />
      
      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'Title'}/>
              <TableCellWithBorder text={'Desc'}/>
              <TableCellWithBorder text={'Location'}/>
              <TableCellWithBorder text={'Amount'}/>
              <TableCellWithBorder text={'Scheduled Date'}/>
              <TableCellWithBorder text={'Scheduled Time'}/>
              <TableCellWithBorder text={'Action'}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {store?.conferences?.map((row,index) => {
              const date = new Date("2023-05-21T23:00:00.000Z").toLocaleDateString() 
              return <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellWithBorder text={index + 1}/>

                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCellWithBorder text={row.description}/>
                <TableCellWithBorder text={row.venue}/>
                <TableCellWithBorder text={row.cost}/>
                <TableCellWithBorder text={date}/>
                <TableCellWithBorder text={row.time}/>

                <TableCell className='border-1 w-[155px] border-border-color' component="th" scope="row">
                  <CustomIconButton iconStyle={'text-[red]'} callBack={()=>{handleClickOpen(); setDeletId(row._id)}} Icon={DeleteIcon}/>

                </TableCell>
                
              </TableRow>
            })}
              
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
