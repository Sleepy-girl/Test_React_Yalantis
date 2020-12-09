import React, { useState, useEffect, useCallback } from 'react';
import { arr_EN, months } from './arrayEng';
import { EmployeesStyled } from './EmployyesStyled';

function Employees() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = useCallback(() => {
    fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then(result => result.json())
      .then(result => {
        setEmployees(
          result.map(employee => {
            if (localStorage.getItem('employees')) {
              const localData = JSON.parse(localStorage.getItem('employees'));
              return localData.filter(elem => elem.id === employee.id).length
                ? { ...employee, checked: true }
                : { ...employee, checked: false };
            } else return { ...employee, checked: false };
          }),
        );
      });
  }, [setEmployees]);

  const onHandleCheck = e => {
    setEmployees(prevState => [
      ...prevState.map(employee =>
        employee.id === e.target.name
          ? { ...employee, checked: !employee.checked }
          : employee,
      ),
    ]);
  };

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  useEffect(() => {
    employees.length &&
      localStorage.setItem(
        'employees',
        JSON.stringify(employees.filter(employee => employee.checked)),
      );
  }, [employees]);

  return (
    <EmployeesStyled>
      <div className="employeessWrapper">
        <h2>Employees</h2>
        <ul>
          {arr_EN.map(symbol => (
            <li key={symbol}>
              {employees.filter(
                employee => employee.lastName.slice(0, 1) === symbol,
              ).length ? (
                <h3>{symbol}</h3>
              ) : (
                <h3>{symbol} ------ </h3>
              )}
              <ul>
                {employees.map(
                  item =>
                    item.lastName.slice(0, 1) === symbol && (
                      <li key={item.id}>
                        <span>
                          {item.lastName} {item.firstName}
                        </span>
                        <input
                          type="checkbox"
                          name={item.id}
                          checked={item.checked}
                          onChange={onHandleCheck}
                        />
                      </li>
                    ),
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="employeesBirthdayWrapper">
        <h2>Employees Birthday</h2>
        <ul className="birthdayList">
          {months.map((month, idx) => {
            return (
              <li key={month}>
                {!!employees.filter(
                  item => new Date(item.dob).getMonth() === idx && item.checked,
                ).length && (
                  <>
                    <h3>{month}</h3>
                    <ul>
                      {employees
                        .filter(
                          item =>
                            new Date(item.dob).getMonth() === idx &&
                            item.checked,
                        )
                        .map(employee => (
                          <li key={employee.id}>
                            <span>
                              {`${employee.lastName} ${
                                employee.firstName
                              } - ${`${new Date(
                                employee.dob,
                              ).getDate()}`.padStart(
                                2,
                                '0',
                              )} ${month}, ${new Date(
                                employee.dob,
                              ).getFullYear()}
                              year`}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </EmployeesStyled>
  );
}

export default Employees;
