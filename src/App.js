import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';  // Login Page
import Dashboard from './components/Dashboard';  // Dashboard Page
import AdminDashboard from './components/AdminDashboard';  // Admin Dashboard
import CreateCarpool from './components/CreateCarpool'; // CreateCarpool component
import CreateStudent from './components/CreateStudent'; // CreateStudent component
import Emergency from './components/Emergency';  // Emergency component
import AboutUs from './components/AboutUs'; // Import AboutUs component
import Message from './components/Message'; // MessagesPage component

function App() {
  const [isAdmin, setIsAdmin] = useState(true);  // Set admin status here for testing

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-carpool" element={<CreateCarpool />} />
        <Route path="/create-student" element={isAdmin ? <CreateStudent /> : <Dashboard />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
