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


import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import {getConferencesThunk} from '../../Store/conference'
import AppLoader from '../../Component/AppLoader';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0,),
  createData('Eclair', 262, 16.0,),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0,),
];

export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.conference);


  useEffect(()=>{
    dispatch(getConferencesThunk())
  },[dispatch])
   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>
      
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
                  <CustomIconButton Icon={FaRegEdit}/>
                  <CustomIconButton iconStyle={'text-[red]'} Icon={DeleteIcon}/>

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
