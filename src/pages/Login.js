import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || !password) {
      setError('ID and password are required');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://api-twjzcamdda-uc.a.run.app/auth/login', { id, password });

      if (response.data.success) {
        const { role } = response.data.user;

        // Save user ID and role to local storage
        localStorage.setItem('userId', id);
        localStorage.setItem('role', role);

        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'student') {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh', // Full height for the screen
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #5f0a87, white)', // Smooth gradient from purple to white
        width: '100vw', // Full width for the screen
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 500, // Adjusted to fit laptop screen size
          padding: 4,
          borderRadius: 4,
          backgroundColor: 'white',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', marginBottom: 2, color: '#5f0a87' }}
        >
          Welcome to UniSafe
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: 3, color: '#333' }}>
          Secure your campus, your way
        </Typography>

        {error && (
          <Typography
            color="error"
            variant="body2"
            sx={{ marginBottom: 2 }}
          >
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ borderRadius: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={loading}
            sx={{
              backgroundColor: '#5f0a87',
              color: 'white',
              textTransform: 'none',
              padding: '10px',
              borderRadius: 50,
              marginTop: 3,
              ':hover': {
                backgroundColor: '#450a67',
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
