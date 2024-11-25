// src/components/AboutUs.js

import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { Message as MessageIcon, DirectionsCar as CarpoolIcon, ReportProblem as EmergencyIcon, Info as InfoIcon } from '@mui/icons-material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="h6" paragraph sx={{ color: '#555' }}>
          Welcome to UniSafe, a platform dedicated to enhancing campus safety and communication. Our mission is to provide users with tools to explore campus resources, stay informed through messages, and quickly report emergencies. Whether you're looking for carpooling options or need to stay updated on campus events, UniSafe is here to help!
        </Typography>
      </Paper>

      {/* Mission and Vision Section */}
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Mission & Vision
        </Typography>
        <Grid container spacing={3} sx={{ textAlign: 'center' }}>
          {/* Mission */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3, backgroundColor: '#e8f5e9', height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                UniSafe is dedicated to enhancing student safety, communication, and access to campus resources. We aim to empower students with seamless access to the tools they need to stay informed and safe while navigating campus life.
              </Typography>
            </Paper>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3, backgroundColor: '#ffebee', height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                To be the leading platform that enhances the student experience through innovative solutions in campus communication, safety, and collaboration.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Key Features Section */}
      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        {/* Box for Add/View Messages */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <MessageIcon sx={{ marginRight: 2, fontSize: 40 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Messages</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Students can add new messages such as announcements, general messages, or security alerts. You can also view messages posted by others, comment on them, or report if necessary. All messages are categorized and can be filtered by type. This feature helps students stay informed about what’s happening on campus.
              </Typography>
              <Button sx={{ marginTop: 2 }} variant="contained" color="primary" href="/messages">
                View Messages
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Box for Add/View Carpool */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <CarpoolIcon sx={{ marginRight: 2, fontSize: 40 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Carpool</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Share your ride with others or view available carpools on campus. The carpool feature allows students to connect with each other for safe and convenient travel. You can easily find a ride or offer one to others, helping reduce campus congestion and promote sustainability.
              </Typography>
              <Button sx={{ marginTop: 2 }} variant="contained" color="primary" href="/create-carpool">
                View Carpools
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Box for Add/View Emergency */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 3, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <EmergencyIcon sx={{ marginRight: 2, fontSize: 40 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Emergency</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                In case of any emergencies, students can quickly report incidents using the emergency feature. Whether it’s a medical emergency, safety concern, or any urgent issue, the platform ensures prompt notifications and actions from campus security.
              </Typography>
              <Button sx={{ marginTop: 2 }} variant="contained" color="primary" href="/emergency">
                Report Emergency
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
