// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/user_reducer';
import companyReducer from './reducers/company_reducer';

const rootReducer = combineReducers({
  gamer: usersReducer,
  company: companyReducer
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
}
