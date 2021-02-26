import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import DonateCoins from '../pages/DonateCoins';
import Store from '../pages/Store';
import SigIn from '../pages/SigIn';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import UserList from '../pages/Register/User';
import GroupUser from '../pages/Register/GroupUser';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/password-forgot" exact component={ForgotPassword} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/donate-coins" exact component={DonateCoins} />
      <Route path="/store" exact component={Store} />
      <Route path="/register" exact component={Register} />
      <Route path="/user-list" exact component={UserList} />
      <Route path="/group-user-list" exact component={GroupUser} />
    </Switch>
  );
};

export default Routes;
