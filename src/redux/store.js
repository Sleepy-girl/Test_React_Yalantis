import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/employeesReducer';

const employeesPersistConfig = {
  key: 'employees',
  storage,
  whilelist: ['id', 'firstName', 'lastName', 'dob'],
};

const rootReducer = combineReducers({
  employees: persistReducer(employeesPersistConfig, reducer.employeesReducer),
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

export default store;
