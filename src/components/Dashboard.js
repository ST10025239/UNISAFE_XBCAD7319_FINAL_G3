import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Message as MessageIcon, ReportProblem as EmergencyIcon, DirectionsCar as CarpoolIcon } from '@mui/icons-material';
import Sidebar from './Sidebar'; // Import Sidebar
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fadeIn to true after component mounts for the fade-in effect
    setFadeIn(true);
  }, []);

  const handleNavigation = (route) => {
    navigate(route); // Navigates to the specified route
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff, #9c27b0)', // White and purple gradient
        opacity: fadeIn ? 1 : 0, // Apply fade-in effect
        transition: 'opacity 1s ease-in-out', // Fade-in transition
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Container maxWidth="lg">
          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>
            What Would You Like to Do Today?
          </Typography>

          {/* Grid for Features */}
          <Grid container spacing={3} justifyContent="center">
            {/* Messages */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: '#ffa726', textAlign: 'center', padding: 2, height: '100%' }}>
                <CardContent>
                  <MessageIcon sx={{ fontSize: 50, color: '#e65100' }} />
                  <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                    Messages
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 2, color: '#4e342e' }}>
                    Students can add new messages such as announcements, general messages, or security alerts. You can also view messages posted by others and comment or report them if necessary.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ marginTop: 2, textTransform: 'none', backgroundColor: '#e65100', color: 'white' }}
                    onClick={() => handleNavigation('/messages')}
                  >
                    View Messages
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Emergency */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: '#f48fb1', textAlign: 'center', padding: 2, height: '100%' }}>
                <CardContent>
                  <EmergencyIcon sx={{ fontSize: 50, color: '#ad1457' }} />
                  <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                    Emergency
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 2, color: '#4e342e' }}>
                    In case of emergencies, report incidents quickly. Whether it’s a medical emergency, safety concern, or urgent issue, you can report directly through this feature.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ marginTop: 2, textTransform: 'none', backgroundColor: '#ad1457', color: 'white' }}
                    onClick={() => handleNavigation('/emergency')}
                  >
                    View Emergency Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Carpool */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: '#90caf9', textAlign: 'center', padding: 2, height: '100%' }}>
                <CardContent>
                  <CarpoolIcon sx={{ fontSize: 50, color: '#1565c0' }} />
                  <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                    Carpool
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 2, color: '#4e342e' }}>
                    Share your ride with others or find available carpools on campus. This feature helps reduce campus congestion and encourages sustainable travel.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ marginTop: 2, textTransform: 'none', backgroundColor: '#1565c0', color: 'white' }}
                    onClick={() => handleNavigation('/create-carpool')} // Updated route
                  >
                    View Carpool Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Recent Messages Section */}
          <Box sx={{ marginTop: 5 }}>
            <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
              Recent Messages
              <Button
                variant="text"
                sx={{ float: 'right', textTransform: 'none', color: '#1565c0' }}
                onClick={() => handleNavigation('/messages')}
              >
                See All
              </Button>
            </Typography>
            <Card sx={{ padding: 2, backgroundColor: '#f7f7f7', borderRadius: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#6a1b9a' }}>
                Type: General
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Can everyone in BCAD Year 3 meet in the auditorium at 11 am on the 25th of November?
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: 'gray' }}>
                Posted by: AD60227884
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2, color: 'gray' }}>
                Posted on: 2024-11-25T02:12:01.157Z
              </Typography>
            </Card>
          </Box>

          {/* UniSafe Information Section */}
          <Box sx={{ marginTop: 5, padding: 3, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Here’s What UniSafe Offers:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Messages:</strong> Stay connected with your peers, faculty, and staff by sending and receiving important announcements, general messages, and even security alerts. You can also comment and report messages as necessary. This feature allows students to stay in the loop about important campus happenings.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Carpooling:</strong> Share your rides with others or find available carpools on campus. By connecting students for rides, UniSafe promotes safe and sustainable travel, reduces congestion on campus, and offers an easy way to connect with others.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Emergency Alerts:</strong> Quickly report emergencies or incidents through the platform. Whether it’s a medical emergency, safety concern, or any urgent issue, UniSafe ensures immediate actions are taken by campus security to address the situation.
            </Typography>
            <Typography variant="body1">
              UniSafe is more than just a set of tools; it's a community platform that empowers students to make their university life easier, safer, and more connected. Whether you’re looking for ride-sharing options, need to report an emergency, or stay up to date with campus announcements, UniSafe brings it all together in one easy-to-use platform.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
