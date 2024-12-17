import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Sidebar from './Sidebar'; // Import Sidebar

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
      const response = await axios.post(
        'https://api-twjzcamdda-uc.a.run.app/students/create',
        {
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
        }
      );

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
        navigate('/admin-dashboard'); // Redirect to admin dashboard after successful creation
      } else {
        setError(response.data.message || 'Unexpected error occurred.');
      }
    } catch (err) {
      console.error('Error creating student:', err);
      if (err.response) {
        // If the server responded with an error
        setError(err.response.data.message || 'Error creating student. Please try again.');
      } else if (err.request) {
        // If the request was made but no response was received
        setError('No response from server. Please check your network connection.');
      } else {
        // Something else went wrong
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar isAdmin={true} /> {/* Pass the admin status to Sidebar */}

      {/* Background with white and purple waves */}
      <Box
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          background: `linear-gradient(to bottom, #ffffff 20%, #d58aff 80%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Custom Top and Bottom Wave Effects */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background: 'radial-gradient(circle at 50% 0%, #d58aff, #ffffff 70%)',
            borderBottomLeftRadius: '50% 20%',
            borderBottomRightRadius: '50% 20%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background: 'radial-gradient(circle at 50% 100%, #d58aff, #ffffff 70%)',
            borderTopLeftRadius: '50% 20%',
            borderTopRightRadius: '50% 20%',
          }}
        />

        {/* Heading at the Top */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#7b33c5',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            Create Student
          </Typography>
        </Box>

        {/* Create Student Form */}
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#ffffff', borderRadius: 4 }}>
            {/* Create Student Title */}
            <Typography variant="h4" align="center" color="primary" fontWeight="bold">
              Create New Student
            </Typography>

            {error && (
              <Typography color="error" sx={{ marginBottom: 2, textAlign: 'center' }}>
                {error}
              </Typography>
            )}

            {/* Student Form Fields */}
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

            {/* Submit Button */}
            <Box sx={{ marginTop: 3 }}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleCreate}
                disabled={loading}
                sx={{
                  backgroundColor: '#9a45f8',
                  '&:hover': { backgroundColor: '#7b33c5' },
                }}
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
