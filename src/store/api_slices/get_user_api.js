import axios from 'axios';

export const GET_ALL_USERS = 'GAMES_RENTAL/SLICES/GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GAMES_RENTAL/SLICES/GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GAMES_RENTAL/SLICES/GET_ALL_USERS_FAILURE';

const getAllUsers = async () => {
  try {
    const response = await axios.get('https://gamerportfolioapi.herokuapp.com/api/users');
    return response.data.users
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return error.response.data;
  }
};

const saveUser = (allUsersInfo) => {
  const allUsersString = JSON.stringify(allUsersInfo);
  localStorage.setItem('allUsers', allUsersString);
};

const dispatchGetAllUsers = async (dispatch) => {
  dispatch({ type: GET_ALL_USERS });
  const data = await getAllUsers();
  if (data.error) {
    dispatch({ type: GET_ALL_USERS_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  saveUser(data);
  return data;
};

export default dispatchGetAllUsers;
