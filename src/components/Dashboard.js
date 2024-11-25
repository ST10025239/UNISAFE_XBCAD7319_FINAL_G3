import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { Explore as ExploreIcon, Message as MessageIcon, ReportProblem as EmergencyIcon, DirectionsCar as CarpoolIcon } from '@mui/icons-material';
import Sidebar from './Sidebar';  // Import Sidebar
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigating to different pages

  const handleCreateCarpool = () => {
    // Navigate to the create carpool page
    navigate('/create-carpool');
  };

  const handleEmergency = () => {
    // Navigate to the emergency page
    navigate('/emergency');
  };

  const handleViewMessages = () => {
    // Navigate to the messages page
    navigate('/messages');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ padding: 3, marginTop: 2, backgroundColor: '#f7f7f7' }}>
            {/* Welcome Message */}
            <Typography variant="h3" align="center" color="primary">
              Welcome to UniSafe
            </Typography>

            {/* Logo */}
            <Box sx={{ textAlign: 'center', marginTop: 3 }}>
              <img 
                src="/IMG_6626 (1).PNG" 
                alt="UniSafe Logo" 
                style={{ maxWidth: '200px', maxHeight: '200px' }} 
              />
              <Typography variant="h6" color="textSecondary">
                "Your campus, your safety, your way"
              </Typography>
            </Box>
          </Paper>

          {/* Features */}
          <Grid container spacing={4} sx={{ marginTop: 4 }} justifyContent="center">
            {/* Messages Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MessageIcon sx={{ fontSize: 50, marginRight: 2 }} />
                    <Typography variant="h5">Messages</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                    Students can add new messages such as announcements, general messages, or security alerts. You can also view messages posted by others and comment or report them if necessary.
                  </Typography>
                  <Button sx={{ marginTop: 2 }} variant="contained" color="primary" onClick={handleViewMessages}>
                    View Messages
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Emergency Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <EmergencyIcon sx={{ fontSize: 50, marginRight: 2 }} />
                    <Typography variant="h5">Emergency</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                    In case of emergencies, report incidents quickly. Whether it’s a medical emergency, safety concern, or urgent issue, you can report directly through this feature.
                  </Typography>
                  <Button sx={{ marginTop: 2 }} variant="contained" color="primary" onClick={handleEmergency}>
                    Report Emergency
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Carpool Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CarpoolIcon sx={{ fontSize: 50, marginRight: 2 }} />
                    <Typography variant="h5">Carpool</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                    Share your ride with others or find available carpools on campus. This feature helps reduce campus congestion and encourages sustainable travel.
                  </Typography>
                  <Button sx={{ marginTop: 2 }} variant="contained" color="primary" onClick={handleCreateCarpool}>
                    View Carpools
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Full-Width Description */}
          <Box sx={{ marginTop: 5, padding: 3, backgroundColor: '#f4f4f4', borderRadius: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
              UniSafe: All-in-One Platform for Campus Life
            </Typography>
            <Typography variant="body1" paragraph>
              UniSafe is the ultimate all-in-one platform designed for students to interact, stay connected, and ensure safety while navigating campus life. It brings together key resources and services that every student needs to stay informed, connected, and secure.
            </Typography>
            <Typography variant="body1" paragraph>
              Here’s what UniSafe offers:
            </Typography>
            <ul>
              <li><strong>Messages</strong>: Stay connected with your peers, faculty, and staff by sending and receiving important announcements, general messages, and even security alerts. You can also comment and report messages as necessary. This feature allows students to stay in the loop about important campus happenings.</li>
              <li><strong>Carpooling</strong>: Share your rides with others or find available carpools on campus. By connecting students for rides, UniSafe promotes safe and sustainable travel, reduces congestion on campus, and offers an easy way to connect with others.</li>
              <li><strong>Emergency Alerts</strong>: Quickly report emergencies or incidents through the platform. Whether it’s a medical emergency, safety concern, or any urgent issue, UniSafe ensures immediate actions are taken by campus security to address the situation.</li>
            </ul>
            <Typography variant="body1" paragraph>
              UniSafe is more than just a set of tools; it's a community platform that empowers students to make their university life easier, safer, and more connected. Whether you’re looking for ride-sharing options, need to report an emergency, or stay up to date with campus announcements, UniSafe brings it all together in one easy-to-use platform.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
