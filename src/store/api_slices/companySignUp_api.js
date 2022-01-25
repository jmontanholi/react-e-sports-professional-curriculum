import axios from 'axios';

export const COMPANY_SIGN_UP = 'GAMES_RENTAL/SLICES/COMPANY_SIGN_UP';
export const COMPANY_SIGN_UP_SUCCESS = 'GAMES_RENTAL/SLICES/COMPANY_SIGN_UP_SUCCESS';
export const COMPANY_SIGN_UP_FAILURE = 'GAMES_RENTAL/SLICES/COMPANY_SIGN_UP_FAILURE';

const CompanySignUp = async (email, password, location, name) => {
  try {
    const response = await axios.post('https://gamerportfolioapi.herokuapp.com/api/companies/sign_up', {
      email: email,
      password: password,
      name: name, 
      location: location
    });
    console.log(response.data.company);
    return response.data.company
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

const dispatchUserSignUp = async (
                                  dispatch, 
                                  email, 
                                  password,
                                  location,
                                  name
                                 ) => {
  dispatch({ type: COMPANY_SIGN_UP });
  const data = await CompanySignUp(email, password, location, name);
  if (data.error) {
    dispatch({ type: COMPANY_SIGN_UP_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: COMPANY_SIGN_UP_SUCCESS, payload: data });
  saveUser(data);
  return data;
};

export default dispatchUserSignUp;
