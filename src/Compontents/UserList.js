import { Box, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/features/userSlice';
import AddUser from './AddUser';
export default function UserList(props) {
    const {users}=props;
    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false);
    const [user,setUser]=useState(null);
    const handleDelete=(id)=>{
        dispatch(deleteUser(id))
    }
    const handleEdit=(user)=>{
        console.log("Edit User:",user)
        setUser(user);
        setEdit(true);
    }
  return (
    <Box m={2}>
      {
        edit && (
          <AddUser open={edit} handleClose={()=>setEdit(false)} user={user}/>
        )
      }
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell> Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell
                sx={{
                  width: 120,
                }}
                >
                Action
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {users?.map((user)=>(
                    <TableRow key={user.id}>
                        <TableCell>{user.fullName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.address}</TableCell>
                        <TableCell>
                            <Grid2  display={"flex"} justifyContent={"space-around"} gap={2}>
                            <EditIcon color={'primary'} onClick={()=>handleEdit(user)}/>
                           <DeleteIcon color={'error'} onClick={()=>handleDelete(user?.id)}/>
                            </Grid2>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
    </Box>
  )
}
