import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { darkTheme, ThemeProvider } from './src/styled';
import Example from './src/Example';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : undefined}>
        <Example
          mode={darkMode ? 'dark' : 'light'}
          toggleMode={() => setDarkMode((p) => !p)}
        />
      </ThemeProvider>

      <StatusBar style="auto" />
    </>
  );
}