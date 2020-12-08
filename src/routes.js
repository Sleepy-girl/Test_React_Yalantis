import { lazy } from 'react';

export const employeesRoute = {
  path: '/employees',
  name: 'Employees',
  component: lazy(() =>
    import(
      './pages/EmployeesPage.js' /* webpackChunkName: "AcademicPerfomance" */
    ),
  ),
};
