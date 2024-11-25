// src/pages/Login.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();  // Hook for navigation
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
      // Use your provided Firebase functions link
      const response = await axios.post('https://api-twjzcamdda-uc.a.run.app/auth/login', { 
        id, 
        password 
      });

      if (response.data.success) {
        // If login is successful, check the role and navigate accordingly
        const { role } = response.data.user;  // assuming the role is returned in the response

        if (role === 'admin') {
          // Navigate to Admin Dashboard
          navigate('/admin-dashboard');
        } else if (role === 'student') {
          // Navigate to Student Dashboard
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
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        {error && (
          <Box sx={{ marginBottom: 2 }}>
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          </Box>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
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
          />

          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
