import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {FaRegEdit} from 'react-icons/fa'


import {CustomIconButton} from '../../Component/FormUtils/FormUtils'

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
   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>
      

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
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCellWithBorder text={index + 1}/>

              <TableCell className='border-1 border-border-color' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCellWithBorder text={row.calories}/>
              <TableCellWithBorder text={row.fat}/>
              
              <TableCell className='border-1 w-[155px] border-border-color' component="th" scope="row">
                <CustomIconButton Icon={FaRegEdit}/>
                <CustomIconButton iconStyle={'text-[red]'} Icon={DeleteIcon}/>

              </TableCell>
              
            </TableRow>
          ))}
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TableCellWithBorder = ({text}) => {
  return (
    <TableCell className='border-1 border-border-color'>{text}</TableCell>

  )
}
