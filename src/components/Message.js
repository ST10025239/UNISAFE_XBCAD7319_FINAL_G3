import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

const Message = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const [faculty, setFaculty] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch all messages on page load
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api-twjzcamdda-uc.a.run.app/messages'); // Adjust API URL if needed
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to fetch messages');
    }
  };

  const handleCreateMessage = async () => {
    if (!author || !content || !type) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('https://api-twjzcamdda-uc.a.run.app/messages/create', {
        author,
        content,
        type,
        faculty,
      });

      if (response.data) {
        alert('Message created successfully!');
        // Clear fields after successful submission
        setAuthor('');
        setContent('');
        setType('');
        setFaculty('');
        fetchMessages(); // Refresh the messages list
      }
    } catch (err) {
      setError('Error creating message, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`https://api-twjzcamdda-uc.a.run.app/messages/${id}`);
      alert('Message deleted successfully');
      fetchMessages(); // Refresh the messages list
    } catch (error) {
      alert('Error deleting message');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #d58aff)',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: 4,
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

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Create Message Form */}
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Create Message
          </Typography>

          {error && <Typography color="error">{error}</Typography>}

          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Type (Announcement, General, Security)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Faculty (Optional)"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            fullWidth
            margin="normal"
          />

          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateMessage}
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Create Message'}
            </Button>
          </Box>
        </Paper>

        {/* Display Messages */}
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            View Messages
          </Typography>

          {loading ? (
            <Box display="flex" justifyContent="center" my={2}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <Grid container spacing={2}>
              {messages.map((message) => (
                <Grid item xs={12} sm={6} key={message.id}>
                  <Paper sx={{ padding: 2, height: '100%' }}>
                    <Typography variant="h6">{message.author}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {message.content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Type: {message.type} | Faculty: {message.faculty || 'N/A'}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ marginTop: 2 }}
                      onClick={() => handleDeleteMessage(message.id)}
                    >
                      Delete Message
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Message;
