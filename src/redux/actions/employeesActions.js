import constants from '../constants/employeesConstant';

const emloyeesRequest = () => ({
  type: constants.EMPLOYEES_REQUEST,
});
const emloyeesSuccess = emloyeesData => ({
  type: constants.EMPLOYEES_SUCCESS,
  payload: [...emloyeesData],
});
const emloyeesError = error => ({
  type: constants.EMPLOYEES_ERROR,
  payload: error,
});

export default {
  emloyeesRequest,
  emloyeesSuccess,
  emloyeesError,
};
