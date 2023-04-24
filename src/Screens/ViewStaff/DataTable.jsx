import React,{useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';

import {CustomIconButton} from '../../Component/FormUtils/FormUtils'
import { getStaffsThunk } from '../../Store/staff';
import AppLoader from '../../Component/AppLoader'

export const DataTable = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.staff)

  useEffect(()=> {
    dispatch(getStaffsThunk())
  },[])
   
  return (
    <TableContainer className='h-[70vh] bg-[white] overflow-y-auto'>
      <AppLoader loading={store.loading}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='sticky top-0 bg-[white] z-[1000]'>
            <TableRow>
              <TableCellWithBorder text={'S/N'}/>
              <TableCellWithBorder text={'Name'}/>
              <TableCellWithBorder text={'Email'}/>
              <TableCellWithBorder text={'Phone Number'}/>
              <TableCellWithBorder text={'Role'}/>
              <TableCellWithBorder text={'Make Admin'}/>
              <TableCellWithBorder text={'Action'}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.staffs.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellWithBorder text={index + 1}/>

                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  {`${row.personalDetails.firstName} ${row.personalDetails.lastName}`}
                </TableCell>
                <TableCellWithBorder text={row.personalDetails.email}/>
                <TableCellWithBorder text={'phone number'}/>
                <TableCellWithBorder text={row.role.join(',')}/>
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <Switch checked={false} />
                </TableCell>
                <TableCell className='border-1 border-border-color' component="th" scope="row">
                  <CustomIconButton iconStyle={'text-[red]'} Icon={DeleteIcon}/>

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
