import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main';
import theme from './theme';
 
const App = ({ children }) => (
  <MuiThemeProvider muiTheme={theme}>
    <Main children={children} />
  </MuiThemeProvider>
);

export default App;
