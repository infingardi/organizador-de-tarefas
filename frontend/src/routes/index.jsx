import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={} path={'/'} exact />
      <Route component={} path={'/signup'} exact />
      <Route component={} path={'/login'} exact />
    </BrowserRouter>
  );
}

export default Routes;