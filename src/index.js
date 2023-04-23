import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, red, yellow, green} from '@mui/material/colors';

import { Provider } from 'react-redux';
import { Store } from './Store/store';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7159',
    },
    secondary: {
      main: '#00D100',
      dark:  '#00A300'
    },
    white: {
      main: '#fffff',
      text: '#00000'
    },
    error:{
      main:'#FF0000',
    },
    moderate: {
      main: '#FFB300'
    },
    excellent: {
      main: '#14C40D'
    }


   
  },

  typography: {
    fontFamily: 'Mulish'
  }
  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <Provider store={Store}>
      <App />
    </Provider> 
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
