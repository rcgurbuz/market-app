import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, SpinnerWrapper } from './theme';
import Header from './views/Header';
import Footer from './views/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import { CircularProgress as Spinner } from '@material-ui/core';
import { RootState } from './store/store';
import { ICompaniesState } from './store/companies/companies';
import { useSelector } from 'react-redux';

function App() {
  const { isLoading } = useSelector<RootState, ICompaniesState>(
    (state: RootState) => state?.companies
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        {isLoading && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
