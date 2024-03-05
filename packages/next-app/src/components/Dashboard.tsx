'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Diagram from './Diagram';
import { ParentSize } from '@visx/responsive';

const defaultTheme = createTheme();

export default function Dashboard() {

  return (
    <ParentSize>
    {(parent) => (
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Demo
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1
            }}
          >
            <Box sx={{ height: 50 }} />
            <Typography sx={{ color: 'red' }}>h1. ANBCDE</Typography>
            <Diagram width={parent.width} height={500}/>
          </Box>
        </Box>
      </ThemeProvider>
    )}
    </ParentSize>
  );
}
