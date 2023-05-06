import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {TfiLayoutSlider} from 'react-icons/tfi'
import {GiVideoConference} from 'react-icons/gi'
import {TbCategory} from 'react-icons/tb'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import PeopleIcon from '@mui/icons-material/People';
import {SlOrganization} from 'react-icons/sl'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from 'react-router';
import { Storage } from '../../Network/StorageClass/StorageClass';

const SideBar = ({open,presentLink}) => {
  const navigate = useNavigate()
  const storage = new Storage()

  const user = storage.getUserDetails()
  const role = user.role

  return (
    <List>
      <CustomList 
        text={'Dashboard'} open={open} 
        active={presentLink === 'dashboard' ? true : false}
        handleClick={() => { navigate("/home") }}
      />
      {role.includes('Admin') && <CustomList 
        text={'Add Staff'} open={open} 
        active={presentLink === 'add-staff' ? true : false}
        handleClick={() => { navigate("/add-staff") }}
        Icon={PersonAddAlt1Icon}
      />}

      {role.includes('Admin') && <CustomList 
        text={'View Staff'} open={open} 
        active={presentLink === 'view-staff' ? true : false}
        handleClick={() => { navigate("/view-staff") }}
        Icon={PeopleIcon}
      />}

      <CustomList 
        text={'View Chapters'} open={open} 
        active={presentLink === 'view-chapters' ? true : false}
        handleClick={() => { navigate("/view-chapters") }}
        Icon={SlOrganization}
      />

      {role.includes('Admin') &&<CustomList 
        text={'Manage Members'} open={open} 
        active={presentLink === 'manage-members' ? true : false}
        handleClick={() => { navigate("/manage-members") }}
        Icon={ManageAccountsIcon}
      />}

      <CustomList 
        text={'Home Slider'} open={open} 
        active={presentLink === 'slider' ? true : false}
        handleClick={() => { navigate("/slider") }}
        Icon={TfiLayoutSlider}
      />

      <CustomList 
        text={'Home Seminar'} open={open} 
        active={presentLink === 'seminar' ? true : false}
        handleClick={() => { navigate("/seminar") }}
        Icon={GiVideoConference}
      />

      {role.includes('Admin') &&<CustomList 
        text={'Membership Category'} open={open} 
        active={presentLink === 'membership' ? true : false}
        handleClick={() => { navigate("/category") }}
        Icon={TbCategory}
      />}

      {role.includes('Admin') &&<CustomList 
        text={'News'} open={open} 
        active={presentLink === 'news' ? true : false}
        handleClick={() => { navigate("/news") }}
        Icon={NewspaperIcon}
      />}

      {role.includes('Admin') &&<CustomList 
        text={'President'} open={open} 
        active={presentLink === 'president' ? true : false}
        handleClick={() => { navigate("/president") }}
        Icon={CoPresentIcon}
      />}

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