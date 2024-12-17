import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import axios from 'axios';

const CreateCarpool = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [driverContact, setDriverContact] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [carpools, setCarpools] = useState([]);

  // Fetch current carpools when the component mounts
  useEffect(() => {
    const fetchCarpools = async () => {
      try {
        const response = await axios.get('https://api-twjzcamdda-uc.a.run.app/carpools');
        setCarpools(response.data);
      } catch (err) {
        setError('Error fetching current carpools.');
      }
    };

    fetchCarpools();
  }, []);

  const handleCreateCarpool = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://api-twjzcamdda-uc.a.run.app/carpools/create', {
        departureLocation,
        departureTime,
        numberOfPeople,
        driverContact,
        userId,
      });

      if (response.data.success) {
        alert('Carpool created successfully!');
        setDepartureLocation('');
        setDepartureTime('');
        setNumberOfPeople('');
        setDriverContact('');
        setUserId('');
        setCarpools([...carpools, response.data.carpool]);
      }
    } catch (err) {
      setError('Error creating carpool, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff 20%, #d58aff 80%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
      }}
    >
      {/* Heading at the Top */}
      <Typography
        variant="h3"
        sx={{
          color: '#7b33c5',
          fontWeight: 'bold',
          marginTop: 4,
          textAlign: 'center',
        }}
      >
        Carpool
      </Typography>

      {/* Custom Top and Bottom Waves */}
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

      <Container maxWidth="sm">
        {/* Form to Create Carpool */}
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4, borderRadius: 4 }}>
          <Typography variant="h5" align="center" gutterBottom sx={{ color: '#7b33c5', fontWeight: 'bold' }}>
            Create Carpool
          </Typography>

          {error && <Typography color="error">{error}</Typography>}

          <TextField
            label="Departure Location"
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Departure Date"
            type="date"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Departure Time"
            type="time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Number of People"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Driver's Contact"
            value={driverContact}
            onChange={(e) => setDriverContact(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            fullWidth
            margin="normal"
          />

          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleCreateCarpool}
              disabled={loading}
              sx={{
                backgroundColor: '#9a45f8',
                '&:hover': { backgroundColor: '#7b33c5' },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Carpool'}
            </Button>
          </Box>
        </Paper>

        {/* Display Current Carpools */}
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4, borderRadius: 4 }}>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#7b33c5', fontWeight: 'bold' }}>
            Current Carpools
          </Typography>

          {carpools.length > 0 ? (
            <List>
              {carpools.map((carpool, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`Location: ${carpool.departureLocation}`}
                    secondary={`Time: ${carpool.departureTime} | Driver: ${carpool.driverContact} | People: ${carpool.numberOfPeople}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography align="center" color="textSecondary">
              No carpools available at the moment.
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default CreateCarpool;
