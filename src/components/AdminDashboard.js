import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing
import Sidebar from './Sidebar';  // Import Sidebar

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

  const navigate = useNavigate(); // Hook for navigating

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
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar isAdmin={true} />  {/* Pass the admin status to Sidebar */}

      {/* Create Student Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ padding: 3, marginTop: 2, backgroundColor: '#f7f7f7' }}>
            {/* Create Student Title */}
            <Typography variant="h3" align="center" color="primary">
              Create New Student
            </Typography>
          </Paper>

          {/* Student Form */}
          <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
            <Typography variant="h5" gutterBottom>
              Fill in the details of the new student
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
      </Box>
    </Box>
  );
};

export default CreateStudent;
