import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

const Emergency = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // State to track if user is admin
  const [userId, setUserId] = useState(''); // State for user ID, to simulate user login

  // Handle creating an emergency
  const handleCreateEmergency = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'https://api-twjzcamdda-uc.a.run.app/emergencies/create',
        {
          title,
          location,
          description,
          userId: userId, // Replace with actual user ID from auth
        }
      );

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

  // Fetch all emergencies and filter based on user role
  const fetchEmergencies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api-twjzcamdda-uc.a.run.app/emergencies'
      );

      // If user is admin (ID starts with 'AD'), show all emergencies (including pending)
      if (isAdmin) {
        setEmergencies(response.data); // Show all emergencies including "Pending"
      } else {
        // Filter emergencies to only include 'Active' or 'Resolved' statuses for students
        const filteredEmergencies = response.data.filter(
          (emergency) =>
            emergency.status === 'Active' || emergency.status === 'Resolved'
        );
        setEmergencies(filteredEmergencies);
      }
    } catch (err) {
      setError('Error fetching emergencies');
    } finally {
      setLoading(false);
    }
  };

  // Simulate checking user role (Replace with actual auth logic)
  useEffect(() => {
    // Simulate fetching user ID from authentication (replace with actual logic)
    const currentUserId = 'AD12345'; // Example user ID (replace with actual user ID from auth)
    setUserId(currentUserId);

    // Check if the user is an admin (ID starts with 'AD')
    if (currentUserId.startsWith('AD')) {
      setIsAdmin(true); // Set isAdmin to true if the user is an admin
    } else if (currentUserId.startsWith('ST')) {
      setIsAdmin(false); // Set to false if the user is a student
    }

    fetchEmergencies(); // Fetch emergencies after determining user role
  }, [userId]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #d58aff)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Add wave effects for top and bottom */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'radial-gradient(circle at 50% 0%, #d58aff, transparent)',
          borderBottomLeftRadius: '50% 30%',
          borderBottomRightRadius: '50% 30%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'radial-gradient(circle at 50% 100%, #d58aff, transparent)',
          borderTopLeftRadius: '50% 30%',
          borderTopRightRadius: '50% 30%',
        }}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Submit Emergency'
              )}
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
              {emergencies.length === 0 ? (
                <Typography>No emergencies found.</Typography>
              ) : (
                emergencies.map((emergency) => (
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
                ))
              )}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Emergency;
