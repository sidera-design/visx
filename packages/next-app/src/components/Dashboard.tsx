'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Diagram from './Diagram';
import Button from '@mui/material/Button';

const defaultTheme = createTheme(
  {
    palette: {
      mode: "light",
    }
  }
);

export default function Dashboard() {
  const theme = {...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      text: {
        primary: "rgba(255, 255, 255, 0.87)",
        secondary: "rgba(255, 255, 255, 0.54)",
      },
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display='flex'
        flexDirection='column'
      >
        <CssBaseline />
        <AppBar
          position="sticky"
        >
          <Toolbar
            sx={{ pr: '12px' }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Demo - Dummy Diagram
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
          }}
          display="flex"
          flexDirection="column"
          flexGrow={1}
        >
          <Box className="diagram-title"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            border={1}
            borderColor={"primary.main"}
            margin={1}
          >
            <Typography
              variant="body1"
              color="primary"
              marginLeft={1}
              noWrap
            >
              Dummy Story
            </Typography>
          </Box>
          <Box
            // display="abstract"
            overflow="auto"
            flexGrow={1}
            color="text.primary"
            border={1}
            borderColor={"primary.main"}
            margin={"1px"}
          >
            <Diagram />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
