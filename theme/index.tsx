import React from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from './colors';

export const defaultTheme = {
  breakpoints: {
    xs: 320, // mobile
    sm: 540, // narrow tablet
    md: 768, // tablet
    lg: 1048, // desktop
    xl: 1336, // desktop hd
  },
  colors,
};

export const Theme = ({ children }) => <ThemeProvider theme={defaultTheme}> {children} </ThemeProvider>;
