import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE } from '../api_slices/get_user_api';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../api_slices/userLogin_api';
import { USER_SIGN_UP, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAILURE } from '../api_slices/userSignup_api';

const initialState = {
  loading: false,
  errors: [],
  all_users: [],
  user_information: {
    user: {

    },
    photos: [],
    videos: [],
  },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, loading: true };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, loading: false, all_users: action.payload };
    case GET_ALL_USERS_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user_information: action.payload };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    case USER_SIGN_UP:
      return { ...state, loading: true };
    case USER_SIGN_UP_SUCCESS:
      return { ...state, loading: false, user_information: action.payload };
    case USER_SIGN_UP_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    default:
      return state;
  }
}

export default usersReducer;
