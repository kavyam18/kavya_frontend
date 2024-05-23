import * as React from 'react';
import { useState } from 'react'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function GuestBoard() {
  
  const [guests, setGuests] = useState([
    { id: 1, name: 'John', lastName: 'Doe', phone: '1234567890', email: 'john@example.com', address: '123 Street', zipCode: '12345', typeIdProof: 'Pan', idProofNumber: 'ABC123', checkIn: true, isCanceled: false },
    
  ]);

  
  const handleCheckInOut = (id) => {
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id ? { ...guest, checkIn: !guest.checkIn } : guest
      )
    );
    
  };

  
  const handleCancellation = (id) => {
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id ? { ...guest, isCanceled: !guest.isCanceled } : guest
      )
    );
  };

  const handleAddRow = () => {
    const id = guests.length > 0 ? guests[guests.length - 1].id + 1 : 1;
    setGuests(prevGuests => [
      ...prevGuests,
      { id, name: '', lastName: '', phone: '', email: '', address: '', zipCode: '', typeIdProof: '', idProofNumber: '', checkIn: true, isCanceled: false }
    ]);
  };

  const handleRemoveRow = () => {
    if (guests.length > 1) {
      setGuests(prevGuests => prevGuests.slice(0, -1));
    }
  };

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 3 }}>
        <Typography variant="h5" component="div" sx={{ mt: 4 }}>
          All Today's Guests
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2, flexGrow: 1 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>GuestID</TableCell>
                <TableCell>Guest-name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Phone-No</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Zip-code</TableCell>
                <TableCell>Type ID Proof</TableCell>
                <TableCell>ID Proof Number</TableCell>
                <TableCell>Check-In/Out</TableCell>
                <TableCell>Is-Canceled</TableCell>
              </TableRow>
              {guests.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell>{guest.id}</TableCell>
                  <TableCell>{guest.name}</TableCell>
                  <TableCell>{guest.lastName}</TableCell>
                  <TableCell>{guest.phone}</TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>{guest.address}</TableCell>
                  <TableCell>{guest.zipCode}</TableCell>
                  <TableCell>
                    <Select
                      value={guest.typeIdProof}
                      onChange={(e) => {
                        const value = e.target.value;
                        setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, typeIdProof: value } : g));
                      }}
                    >
                      <MenuItem value="Pan">Pan</MenuItem>
                      <MenuItem value="Aadhar">Aadhar</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>{guest.idProofNumber}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={guest.checkIn ? "primary" : "secondary"}
                      onClick={() => handleCheckInOut(guest.id)}
                    >
                      {guest.checkIn ? "Check-Out" : "Check-In"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={guest.isCanceled ? "secondary" : "primary"}
                      onClick={() => handleCancellation(guest.id)}
                    >
                      {guest.isCanceled ? "Not Canceled" : "Canceled"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {/* Add and remove row buttons */}
              <TableRow>
                <TableCell colSpan={11} align="right">
                  <Button onClick={handleAddRow}><AddIcon /></Button>
                  <Button onClick={handleRemoveRow}><RemoveIcon /></Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
  
  );
}
