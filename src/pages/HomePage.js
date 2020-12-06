import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeesPage from "./EmployeesPage";
import operation from "../redux/operations/employeesOpearstions";

function HomePage() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const getArray = useSelector((state) => state.employees);

  // const getEmployees = useCallback(async () => {
  //   const result = await dispatch(operation.getEmployeesOperation());
  //   console.log("result", result);
  //   // setState([...result]);
  //   // console.log(state);
  //   // return result;
  // }, [dispatch]);
  // const employeesArray = [...state.employees];

  // useEffect(() => getEmployees(), [getEmployees]);

  return (
    <>
      {/* <ul>
        {employeesArray.map((item) => (
          <li key={item.id}>{item.lastName}</li>
        ))}
      </ul> */}
      {console.log("getArray", getArray)}
      {/* {getEmployees()} */}
      <EmployeesPage />
    </>
  );
}

export default HomePage;
