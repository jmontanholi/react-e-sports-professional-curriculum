import axios from 'axios';

export const COMPANY_LOGIN = 'GAMES_RENTAL/SLICES/COMPANY_LOGIN';
export const COMPANY_LOGIN_SUCCESS = 'GAMES_RENTAL/SLICES/COMPANY_LOGIN_SUCCESS';
export const COMPANY_LOGIN_FAILURE = 'GAMES_RENTAL/SLICES/COMPANY_LOGIN_FAILURE';

const companyLogin = async (email, password) => {
  try {
    const response = await axios.post('https://gamerportfolioapi.herokuapp.com/api/companies/sign_in', {
      email: email,
      password: password
    });
    return response.data.company
  } catch (error) {
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

const dispatchCompanyLogin = async (dispatch, email, password) => {
  dispatch({ type: COMPANY_LOGIN });
  const data = await companyLogin(email, password);
  if (data.error) {
    dispatch({ type: COMPANY_LOGIN_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: COMPANY_LOGIN_SUCCESS, payload: data });
  saveUser(data);
  return data;
};

export default dispatchCompanyLogin;
