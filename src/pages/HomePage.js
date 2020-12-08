import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { EmployeesStyled, LinkElem } from './EmployyesStyled';
import { arr_EN, months } from './arrayEng';
import { employeesRoute } from '../routes';
// import EmployeesPage from './EmployeesPage';
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
        // console.log(result);
        setEmployees(result);
      });
  }, [setEmployees]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleChange = e => {
    setShowDob(prevState => !prevState);
  };
  //---------
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    history.push(`${match.url}/academicperfomance`);
  }, [history, match.url]);

  return (
    <>
      <LinkElem
        to={`${employeesRoute.url}${employeesRoute.path}`}
        activeStyle={{ color: '#5f73a1' }}
      >
        {employeesRoute.name}
      </LinkElem>
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
            {months.filter((month, idx) => {
              employees.map(item => {
                if (idx === Number(item.dob.split('-')[1])) {
                  return (
                    <li key={idx}>
                      <h3>{month}</h3>
                      {item.lastName} {item.firstName} - {item.dob.split('')[8]}
                      {item.dob.split('')[9]}
                      {month}, {item.dob.split('-')[0]} yaer
                      {/* {console.log(`${item.lastName} ${item.firstName} - ${
                      item.dob.split('')[8]
                    }${item.dob.split('')[9]}
                    ${month}, ${item.dob.split('-')[0]} yaer`)} */}
                    </li>
                  );
                }
              });
            })}
          </ul>
        </div>
        {/* <EmployeesPage />  */}
      </EmployeesStyled>
    </>
  );
}

export default HomePage;
