import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://api-twjzcamdda-uc.a.run.app/students/create', {
        name,
        surname,
        idNumber,
        email,
        phoneNumber,
        address: {
          street,
          suburb,
          city,
        },
        password,
      });

      if (response.data.success) {
        alert('Student created successfully');
        // Clear all fields after successful submission
        setName('');
        setSurname('');
        setIdNumber('');
        setEmail('');
        setPhoneNumber('');
        setStreet('');
        setSuburb('');
        setCity('');
        setPassword('');
      }
    } catch (err) {
      setError('Error creating student');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Create Student
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="ID Number"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Suburb"
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          type="password"
          margin="normal"
        />

        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreate}
            fullWidth
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Student'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateStudent;
