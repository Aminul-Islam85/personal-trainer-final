import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Customers from './Customers';
import Trainings from './Trainings';
import Calendar from './Calendar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header onMenuClick={handleDrawerToggle} drawerOpen={open} />
      <Box display="flex">
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, height: 64 }} />
          <Routes>
            <Route path="/" element={<Customers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
