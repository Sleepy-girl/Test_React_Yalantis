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
          result.map(employe => {
            if (localStorage.getItem('employees')) {
              const localData = JSON.parse(localStorage.getItem('employees'));
              return localData.filter(elem => elem.id === employe.id).length
                ? { ...employe, checked: true }
                : { ...employe, checked: false };
            } else return { ...employe, checked: false };
          }),
        );
      });
  }, [setEmployees]);

  const onHandleCheck = e => {
    setEmployees(prevState => [
      ...prevState.map(employe =>
        employe.id === e.target.name
          ? { ...employe, checked: !employe.checked }
          : employe,
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
        JSON.stringify(employees.filter(employe => employe.checked)),
      );
  }, [employees]);

  return (
    <EmployeesStyled>
      <div className="employessWrapper">
        <h2>Employees</h2>
        <ul>
          {arr_EN.map(symbol => (
            <li key={symbol}>
              {employees.filter(
                employe => employe.lastName.slice(0, 1) === symbol,
              ).length ? (
                <h3>{symbol}</h3>
              ) : (
                <h3>{symbol} --- </h3>
              )}
              <ul>
                {employees.map(
                  item =>
                    item.lastName.slice(0, 1) === symbol && (
                      <li key={item.id}>
                        {item.lastName} {item.firstName}
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
        <ul>
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
                        .map(employe => (
                          <li key={employe.id}>
                            <span>
                              {employe.lastName} {employe.firstName} -
                              {`${new Date(employe.dob).getDay()}`.padStart(
                                2,
                                '0',
                              )}{' '}
                              {month}, {new Date(employe.dob).getFullYear()}{' '}
                              year
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
