import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
// import HomePage from '../components/HomePage';

import AddDeveloperPage from '../components/AddDeveloperPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';




const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={DeveloperDashboardPage} exact={true} />
        <Route path="/create" component={AddDeveloerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
