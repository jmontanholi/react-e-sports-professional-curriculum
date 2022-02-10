import axios from 'axios';

export const USER_SIGN_UP = 'GAMES_RENTAL/SLICES/USER_SIGN_UP';
export const USER_SIGN_UP_SUCCESS = 'GAMES_RENTAL/SLICES/USER_SIGN_UP_SUCCESS';
export const USER_SIGN_UP_FAILURE = 'GAMES_RENTAL/SLICES/USER_SIGN_UP_FAILURE';

const userSignUp = async (email, password, location, name, age) => {
  try {
    const response = await axios.post('https://gamerportfolioapi.herokuapp.com/api/users/sign_up', {
      email: email,
      password: password,
      age: age,
      name: name, 
      location: location,
      user_type: 'gamer'
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

const dispatchUserSignUp = async (dispatch, 
                                 email, 
                                 password,
                                 location,
                                 name,
                                 age
                                 ) => {
  dispatch({ type: USER_SIGN_UP });
  const data = await userSignUp(email, password, location, name, age);
  if (data.error) {
    dispatch({ type: USER_SIGN_UP_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: USER_SIGN_UP_SUCCESS, payload: data });
  saveUser(data);
  return data;
};

export default dispatchUserSignUp;
