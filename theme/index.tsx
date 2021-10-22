import React from 'react';
import { ThemeProvider } from 'styled-components';

export const defaultTheme = {
  breakpoints: {
    xs: 320,
    sm: 540,
    md: 768,
    lg: 1048,
    xl: 1336,
  },
  color: 'black',
};

export const Theme = ({ children }) => <ThemeProvider theme={defaultTheme}> {children} </ThemeProvider>;
