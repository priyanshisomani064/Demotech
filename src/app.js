import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import PricePage from './components/PricePage';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={ProductPage} />
          <Route path="/prices" component={PricePage} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
