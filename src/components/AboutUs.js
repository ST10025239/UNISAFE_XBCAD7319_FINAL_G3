import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { Message as MessageIcon, DirectionsCar as CarpoolIcon, ReportProblem as EmergencyIcon, Info as InfoIcon } from '@mui/icons-material';

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff 20%, #d58aff 80%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top and Bottom Wave Design */}
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

      <Container maxWidth="lg" sx={{ zIndex: 1 }}>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white', borderRadius: 4 }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#7b33c5' }}>
            About Us
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: '#555' }}>
            Welcome to UniSafe, a platform dedicated to enhancing campus safety and communication. Our mission is to provide users with tools to explore campus resources, stay informed through messages, and quickly report emergencies. Whether you're looking for carpooling options or need to stay updated on campus events, UniSafe is here to help!
          </Typography>
        </Paper>

        {/* Mission and Vision Section */}
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#7b33c5' }}>
            Our Mission & Vision
          </Typography>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {/* Mission */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: 3, backgroundColor: '#FFE082', height: '100%' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#4E342E' }}>
                  UniSafe is dedicated to enhancing student safety, communication, and access to campus resources. We aim to empower students with seamless access to the tools they need to stay informed and safe while navigating campus life.
                </Typography>
              </Paper>
            </Grid>

            {/* Vision */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: 3, backgroundColor: '#F48FB1', height: '100%' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: '#4E342E' }}>
                  To be the leading platform that enhances the student experience through innovative solutions in campus communication, safety, and collaboration.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Key Features Section */}
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          {/* Add/View Messages */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 3, height: '100%', backgroundColor: '#FFA726' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <MessageIcon sx={{ marginRight: 2, fontSize: 40, color: '#E65100' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Messages</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  Students can add messages such as announcements, security alerts, and comments. This feature helps students stay informed about campus updates.
                </Typography>
                <Button sx={{ marginTop: 2, backgroundColor: '#E65100' }} variant="contained" href="/messages">
                  View Messages
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Add/View Carpool */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 3, height: '100%', backgroundColor: '#90CAF9' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <CarpoolIcon sx={{ marginRight: 2, fontSize: 40, color: '#1565C0' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Carpool</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  Share your ride or view available carpools on campus. This feature promotes safe and sustainable travel.
                </Typography>
                <Button sx={{ marginTop: 2, backgroundColor: '#1565C0' }} variant="contained" href="/create-carpool">
                  View Carpools
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Report Emergency */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 3, height: '100%', backgroundColor: '#F48FB1' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <EmergencyIcon sx={{ marginRight: 2, fontSize: 40, color: '#AD1457' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Emergency</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  Quickly report emergencies, safety concerns, or urgent issues to campus security for immediate attention.
                </Typography>
                <Button sx={{ marginTop: 2, backgroundColor: '#AD1457' }} variant="contained" href="/emergency">
                  Report Emergency
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
