import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazy(() =>
      import('./pages/HomePage' /* webpackChunkName: "Home" */),
    ),
  },
  {
    path: '/employees',
    name: 'Employees',
    component: lazy(() =>
      import('./pages/EmployeesPage' /* webpackChunkName: "Employees" */),
    ),
  },
];
