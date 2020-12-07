import axios from 'axios';
import action from '../actions/employeesActions';
// import constants from "../constants/employeesConstant";

const getEmployeesOperation = () => async dispatch => {
  // dispatch(action.loaderOn());
  try {
    const result = await axios.get(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users',
    );
    console.log(result.data);
    await dispatch(action.emloyeesSuccess(result.data));
  } catch (error) {
    console.log('error-emloyees', error);
    dispatch(action.emloyeesError(error));
    // } finally {
    // dispatch(action.loaderOff());
  }
};

export default { getEmployeesOperation };
