import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { EmployeesStyled } from './EmployyesStyled';
import { arr_EN, months } from './arrayEng';
import EmployeesPage from './EmployeesPage';
// import operation from '../redux/operations/employeesOpearstions';
// import action from '../redux/actions/employeesActions';

function HomePage() {
  const [employees, setEmployees] = useState([]);
  const [isShowDob, setShowDob] = useState(false);
  // const dispatch = useDispatch();
  // const getArray = useSelector(state => state.employees);

  const fetchEmployees = useCallback(() => {
    fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        // dispatch(action.emloyeesSuccess([...result]));
        setEmployees(result);
      });
  }, [setEmployees]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleChange = e => {
    setShowDob(prevState => !prevState);
  };

  return (
    <EmployeesStyled>
      <div className="employessWrapper">
        <h2>Employees</h2>
        <ul>
          {arr_EN.map(symbol => (
            <li key={symbol}>
              <h3>{symbol}</h3>
              <ul>
                {employees.map(item => {
                  if (item.lastName.split('')[0] === symbol) {
                    return (
                      <li key={item.id}>
                        {item.lastName} {item.firstName}
                        <input
                          type="checkbox"
                          name={item.id}
                          value={item.id}
                          onChange={handleChange}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="employeesBirthdayWrapper">
        <h2>Employees Birthday</h2>
        <ul>
          {months.map((month, idx) => (
            <li key={idx}>
              <h3>{month}</h3>
            </li>
          ))}
        </ul>
      </div>
      {/* <EmployeesPage />  */}
    </EmployeesStyled>
  );
}

export default HomePage;
