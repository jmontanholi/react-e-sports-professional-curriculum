import React from 'react';
import './App.scss';
import HomePage from './pages/homePage';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import UserProfile from './pages/userProfile';

const store = configureStore();
// ATTRIBUTIONS
// <a href='https://br.freepik.com/fotos-vetores-gratis/computador'>Computador vetor criado por freepik - br.freepik.com</a>
// <a href='https://br.freepik.com/fotos-vetores-gratis/tecnologia'>Tecnologia vetor criado por freepik - br.freepik.com</a> 
//<a href='https://br.freepik.com/fotos-vetores-gratis/tecnologia%27%3ETecnologia vetor criado por pikisuperstar - br.freepik.com</a>
//<a href='https://br.freepik.com/fotos-vetores-gratis/abstrato%27%3EAbstrato vetor criado por vectorjuice - br.freepik.com</a>
//<a href='https://br.freepik.com/fotos-vetores-gratis/tecnologia%27%3ETecnologia vetor criado por freepik - br.freepik.com</a>

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/sign_up" element={<SignUpPage />}/>
            <Route path="/user/:id" element={<UserProfile />}/>
            <Route path="/" element={<HomePage />}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
