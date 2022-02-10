import axios from 'axios';

export const USER_LOGIN = 'GAMES_RENTAL/SLICES/USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'GAMES_RENTAL/SLICES/USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'GAMES_RENTAL/SLICES/USER_LOGIN_FAILURE';

const userLogin = async (email, password) => {
  try {
    const response = await axios.post('https://gamerportfolioapi.herokuapp.com/api/users/sign_in', {
      email: email,
      password: password
    });
    console.log(response.data.user);
    return response.data.user
  } catch (error) {
    console.log(error)
    if (!error.response) {
      throw error;
    }
    return error.response.data;
  }
};

const saveUser = (userInformation) => {
  const userInfoString = JSON.stringify(userInformation);
  localStorage.setItem('userInfo', userInfoString);
};

const dispatchUserLogin = async (dispatch, email, password) => {
  dispatch({ type: USER_LOGIN });
  const data = await userLogin(email, password);
  if (data.error) {
    dispatch({ type: USER_LOGIN_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  saveUser(data);
  return data;
};

export default dispatchUserLogin;
