import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

import PeopleIcon from '@mui/icons-material/People';
import {SlOrganization} from 'react-icons/sl'
import PaymentsIcon from '@mui/icons-material/Payments';
import { useNavigate } from 'react-router';

const SideBar = ({open,presentLink}) => {
  const navigate = useNavigate()

  return (
    <List>
      <CustomList 
        text={'Dashboard'} open={open} 
        active={presentLink === 'dashboard' ? true : false}
        handleClick={() => { navigate("/") }}
      />
      <CustomList 
        text={'Add Staff'} open={open} 
        active={presentLink === 'add-staff' ? true : false}
        handleClick={() => { navigate("/add-staff") }}
        Icon={PersonAddAlt1Icon}
      />

      <CustomList 
        text={'View Staff'} open={open} 
        active={presentLink === 'view-staff' ? true : false}
        handleClick={() => { navigate("/view-staff") }}
        Icon={PeopleIcon}
      />

      <CustomList 
        text={'View Chapters'} open={open} 
        active={presentLink === 'view-chapters' ? true : false}
        handleClick={() => { navigate("/view-chapters") }}
        Icon={SlOrganization}
      />

      <CustomList 
        text={'Payment'} open={open} 
        active={presentLink === 'payment' ? true : false}
        handleClick={() => { navigate("/payment") }}
        Icon={PaymentsIcon}
      />

    </List>
  )
}

export default SideBar

const CustomList = ({text, open, Icon=DashboardIcon, handleClick, active=false}) => {
  return (
    <ListItem key={text} disablePadding className={active ? 'bg-primary' : ''}  onClick={handleClick}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          <Icon className={active ? 'text-tahiti' : 'text-[black]' }/>
        </ListItemIcon>

        <ListItemText primary={text} className={active ? 'text-tahiti' : 'text-[black]' } sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}