import { COMPANY_LOGIN, COMPANY_LOGIN_SUCCESS, COMPANY_LOGIN_FAILURE } from '../api_slices/companyLogin_api';


const initialState = {
  loading: false,
  errors: [],
  company_information: {
    company: {
      name: '',
      email: '',
      location: ''
    },
    favorite_gamers: []
  },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case COMPANY_LOGIN:
      return { ...state, loading: true };
    case COMPANY_LOGIN_SUCCESS:
      return { ...state, loading: false, company_information: action.payload };
    case COMPANY_LOGIN_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    default:
      return state;
  }
}

export default usersReducer;
