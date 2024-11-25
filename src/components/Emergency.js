import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import axios from 'axios';

const Emergency = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Handle creating an emergency
  const handleCreateEmergency = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://api-twjzcamdda-uc.a.run.app/emergencies/create', {
        title,
        location,
        description,
        userId: 'user-id', // Replace with actual user ID from auth
      });

      if (response.data) {
        alert('Emergency created successfully');
        fetchEmergencies(); // Reload the emergencies after successful creation
      }
    } catch (err) {
      setError('Error creating emergency');
    } finally {
      setLoading(false);
    }
  };

  // Fetch all emergencies
  const fetchEmergencies = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api-twjzcamdda-uc.a.run.app/emergencies');
      setEmergencies(response.data);
    } catch (err) {
      setError('Error fetching emergencies');
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to load emergencies when component mounts
  useEffect(() => {
    fetchEmergencies();
  }, []);

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <Typography variant="h5" gutterBottom>
          Report Emergency
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateEmergency}
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Emergency'}
          </Button>
        </Box>
      </Paper>

      {/* View Reported Emergencies */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Emergency Reports</Typography>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <Grid container spacing={3} sx={{ marginTop: 2 }}>
            {emergencies.map((emergency) => (
              <Grid item xs={12} sm={6} md={4} key={emergency.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6">{emergency.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {emergency.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: {emergency.status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {emergency.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Emergency;
