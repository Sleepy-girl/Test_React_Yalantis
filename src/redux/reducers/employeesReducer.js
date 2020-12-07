import constants from '../constants/employeesConstant';

const employeesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case constants.EMPLOYEES_SUCCESS:
      return payload;

    default:
      return state;
  }
};
export default {
  employeesReducer,
};
