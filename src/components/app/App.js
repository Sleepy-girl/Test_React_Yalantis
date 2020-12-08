import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../routes';
import Header from '../header/Header';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {routes.map(({ path, component: MyComponent }) => (
            <Route
              key={path}
              exact
              path={path}
              render={() => <MyComponent />}
            />
          ))}
          <Redirect to={'/'} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
