import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import mainApi from '../../utils/MainApi.js'
import * as auth from '../../auth.js';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  const [cards, setCards] = React.useState([]);
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [foundSavedFilms, setFoundSavedFilms] = React.useState([]);
  const [isLoginSuccess, setLoginSuccess] = React.useState(false);
  const [isLoginFail, setLoginFail] = React.useState(false);
  const [loginToolText, setLoginToolText] = React.useState('');
  const [isRegSuccess, setRegSuccess] = React.useState(false);
  const [isRegFail, setRegFail] = React.useState(false);
  const [regToolText, setRegToolText] = React.useState('');
  const [isUpdSuccess, setUpdSuccess] = React.useState(false);
  const [isUpdFail, setUpdFail] = React.useState(false);
  const [updToolText, setUpdToolText] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  let storedFilms 
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    mainApi.getFilms()
        .then((films) => {
          console.log(films.data)
            setSavedFilms(films.data);
        })
        .catch((err) => {
            console.log(`Error ${err}`)
        });
  }, []);

  console.log(savedFilms)

  React.useEffect(() => {
    function handleUserInfo() {
        mainApi.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            });
    }
    handleUserInfo();
  }, []);

  function handleRegister(name, email, password) {
    console.log(isRegSuccess);
    auth.register(name, email, password)
        .then((res) => {
          if (res === undefined) {
            setRegFail(true);
          } else {
            setRegSuccess(true);
            auth.login(email, password)
              .then((data) => {
                  if (data) {
                      console.log(data)
                      setCurrentUser(data);
                      setLoggedIn(true);
                      navigate('/movies', {replace: true})
                  }
              })
              .catch((err) => {
                  console.log(err);
              })
          }
          console.log(isRegFail);
        })
        .catch((err) => {
          setRegFail(true)
          if (err === 'Ошибка: 401') {
            setRegToolText('Неверные данные пользователя')
          } else if (err === 'Ошибка: 400') {
            setRegToolText('Что-то пошло не так. Попробуйте ввести данные заново.')
          } else if (err === 'Ошибка: 409') {
            setRegToolText('Пользователь с таким e-mail уже существует.')
          } else if (err === 'Ошибка: 500') {
            setRegToolText('Ошибка сервера. Попробуйте повторить попытку позже.')
          }
        })
        .finally(() => {
          setTimeout(() => {
            setRegSuccess(false)
          }, 3000)
        })
  }

  function handleLogin(email, password) {
    auth.login(email, password)
        .then((data) => {
            if (data) {
                console.log(data)
                setCurrentUser(data);
                setLoggedIn(true);
                setLoginSuccess(true)
                setLoginToolText('Авторизация прошла успешно!')
                setTimeout(() => {
                  navigate('/movies', {replace: true})
                }, 3000)
            }
        })
        .catch((err) => {
          setLoginFail(true)
          if (err === 'Ошибка: 401') {
            setLoginToolText('Неверные данные пользователя')
          } else if (err === 'Ошибка: 400') {
            setLoginToolText('Что-то пошло не так. Попробуйте ввести данные заново.')
          } else if (err === 'Ошибка: 500') {
            setLoginToolText('Ошибка сервера. Попробуйте повторить попытку позже.')
          }
        })
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

  const tokenCheck = () => {
    auth.getContent()
        .then((res) => {
            setLoggedIn(true);
            navigate(location.pathname, {replace: true});
            return res
        })
        .catch((err) => {
            console.log(err)
        })
  };

  function handleUpdateUser({name, email}) {
    mainApi.editProfile(name, email)
        .then((data) => {
            console.log(data);
            setCurrentUser(data);
            setUpdSuccess(true);
        })
        .catch((err) => {
          setUpdFail(true);
          if (err === 'Ошибка: 401') {
            setUpdToolText('Неверные данные пользователя')
          } else if (err === 'Ошибка: 400') {
            setUpdToolText('Что-то пошло не так. Попробуйте ввести данные заново.')
          } else if (err === 'Ошибка: 500') {
            setUpdToolText('Ошибка сервера. Попробуйте повторить попытку позже.')
          }
        });
  }

  function handleLogOut() {
    auth.logout()
        .then((res) => {
            console.log(res);
            setLoggedIn(false);
            localStorage.setItem('filmName', '');
            localStorage.setItem('foundFilms', '');
            localStorage.setItem('isShort', false)
            navigate('/signin', {replace: true})
        })
        .catch((err) => {
            console.log(err)
        })
  }

  function handleCardSave(card) {
    console.log(card)
    mainApi.saveFilm(card)
      .then((res) => {
        console.log(res)
        mainApi.getFilms()
          .then((films) => {
            console.log(films.data)
              setSavedFilms(films.data);
          })
          .catch((err) => {
              console.log(`Error ${err}`)
          });
      })
      .catch((err) => {
        console.log(err)
    })
  }

  function handleCardDelete(card) {
    storedFilms = JSON.parse(localStorage.foundFilms)
    console.log(card)
    const cardToDelete = savedFilms.find((c) => c.movieId === card.id)
    if (typeof card.id === 'number') {
      mainApi.deleteFilm(cardToDelete._id)
      .then((res) => {
        console.log(res)
        setSavedFilms((savedFilms) => savedFilms.filter(c => c.movieId !== card.id));
        storedFilms = storedFilms.map((c) => {
          const newCard = {...card, saved: 'no'}
          console.log(newCard)
          if (c.id === card.id) {
            return newCard;
          } else {
            return c;
          }
        })
      })
      .then(() => {
        mainApi.getFilms()
          .then((films) => {
            console.log(films.data)
              setSavedFilms(films.data);
          })
          .catch((err) => {
              console.log(`Error ${err}`)
          });
      })
      .catch((err) => {
        console.log(err)
      })
    } else if (typeof card.movieId === 'number') {
      mainApi.deleteFilm(card._id)
        .then((res) => {
          console.log(res)
          setSavedFilms((savedFilms) => savedFilms.filter(c => c.movieId !== card.movieId));
        })
        .catch((err) => {
          console.log(err)
        })
    }
    
    console.log(card.movieId)
    console.log(card.id)
    console.log(card)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
          <Routes>
            <Route 
              path="/"
              element={<ProtectedRouteElement
              element={Main}
              loggedIn={isLoggedIn}
              />}
            />
            <Route path='/movies' element={<ProtectedRouteElement
              element={Movies}
              loggedIn={isLoggedIn}
              cards={cards}
              setCards={setCards}
              savedFilms={savedFilms}
              setSavedFilms={setSavedFilms}
              foundSavedFilms={foundSavedFilms}
              setFoundSavedFilms={setFoundSavedFilms}
              onCardSave={handleCardSave}
              onCardDelete={handleCardDelete}
              />}
            />
            <Route path='/saved-movies' element={<ProtectedRouteElement
              element={SavedMovies}
              loggedIn={isLoggedIn}
              savedFilms={savedFilms}
              setSavedFilms={setSavedFilms}
              foundSavedFilms={foundSavedFilms}
              setFoundSavedFilms={setFoundSavedFilms}
              onCardDelete={handleCardDelete}
              />}
            />
            <Route path='/profile' element={<ProtectedRouteElement
              element={Profile}
              loggedIn={isLoggedIn}
              onLogout={handleLogOut}
              onUpdateUser={handleUpdateUser}
              isSuccess={isUpdSuccess}
              isFail={isUpdFail}
              toolText={updToolText}
              />}
            />
            <Route path='/signup' element={<Register onRegister={handleRegister} isSuccess={isRegSuccess} isFail={isRegFail} toolText={regToolText} />} />
            <Route path='/signin' element={<Login onLogin={handleLogin} isSuccess={isLoginSuccess} isFail={isLoginFail} toolText={loginToolText} />} />
            <Route path='/not-found' element={<NotFound />} />
          </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
