import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Toolbar } from '@mui/material';

const MainContent = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',

            }}
        >
            <Toolbar />
            <Outlet />
        </Container>
    );
};

export default MainContent;
