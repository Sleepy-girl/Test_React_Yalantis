import React from 'react';
import { NavigationStyled, LinkElem } from './navigationStyled';
import { routes } from '../../routes';

function Navigation() {
  return (
    <NavigationStyled>
      {routes.map(route => (
        <LinkElem
          key={route.path}
          exact
          to={`${route.path}`}
          activeStyle={{ color: 'crimson' }}
        >
          {route.name}
        </LinkElem>
      ))}
    </NavigationStyled>
  );
}

export default Navigation;
