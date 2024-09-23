import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { authContext } from '~/services';

interface Props extends RouteProps {
  component: any
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const [auth] = useContext(authContext);

  return (
    <Route {...rest} render={() => (
      auth.isAuthenticated === true
        ? <Component />
        : <Redirect to='/login' />
    )} />
  )
}


export default PrivateRoute;