import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.jsx";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import mainApi from "../../utils/MainApi.js";
import * as auth from "../../auth.js";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const [cards, setCards] = React.useState([]);
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [foundSavedFilms, setFoundSavedFilms] = React.useState([]);
  const [isLoginSuccess, setLoginSuccess] = React.useState(false);
  const [isLoginFail, setLoginFail] = React.useState(false);
  const [loginToolText, setLoginToolText] = React.useState("");
  const [isRegSuccess, setRegSuccess] = React.useState(false);
  const [isRegFail, setRegFail] = React.useState(false);
  const [regToolText, setRegToolText] = React.useState("");
  const [isUpdSuccess, setUpdSuccess] = React.useState(false);
  const [isUpdFail, setUpdFail] = React.useState(false);
  const [updToolText, setUpdToolText] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isSaveSuccess, setSaveSuccess] = React.useState(false);
  const [isSaveFail, setSaveFail] = React.useState(false);
  const [cardToolText, setCardToolText] = React.useState("");
  const [isDeleteSuccess, setDeleteSuccess] = React.useState(false);
  const [isDeleteFail, setDeleteFail] = React.useState(false);
  const [cardDeleteToolText, setCardDeleteToolText] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    function handleUserInfo() {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(`Error ${err}`);
        });
    }
    handleUserInfo();
  }, []);

  React.useEffect(() => {
    mainApi
      .getFilms()
      .then((films) => {
        setSavedFilms(
          films.data.filter((card) => card.owner === currentUser._id)
        );
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, [currentUser._id]);

  function handleRegister(name, email, password) {
    console.log(isRegSuccess);
    auth
      .register(name, email, password)
      .then((res) => {
        if (res === undefined) {
          setRegFail(true);
        } else {
          setRegSuccess(true);
          auth
            .login(email, password)
            .then((data) => {
              if (data) {
                console.log(data);
                setCurrentUser(data);
                setLoggedIn(true);
                navigate("/movies", { replace: true });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log(isRegFail);
      })
      .catch((err) => {
        setRegFail(true);
        if (err === "Ошибка: 401") {
          setRegToolText("Неверные данные пользователя");
        } else if (err === "Ошибка: 400") {
          setRegToolText(
            "Что-то пошло не так. Попробуйте ввести данные заново."
          );
        } else if (err === "Ошибка: 409") {
          setRegToolText("Пользователь с таким e-mail уже существует.");
        } else if (err === "Ошибка: 500") {
          setRegToolText("Ошибка сервера. Попробуйте повторить попытку позже.");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setRegSuccess(false);
        }, 3000);
      });
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        if (data) {
          console.log(data);
          setCurrentUser(data);
          setLoggedIn(true);
          setLoginSuccess(true);
          setLoginToolText("Авторизация прошла успешно!");
          setTimeout(setLoginToolText, 3000, "");
          setTimeout(() => {
            navigate("/movies", { replace: true });
          }, 3000);
        }
      })
      .catch((err) => {
        setLoginFail(true);
        if (err === "Ошибка: 401") {
          setLoginToolText("Неверные данные пользователя");
        } else if (err === "Ошибка: 400") {
          setLoginToolText(
            "Что-то пошло не так. Попробуйте ввести данные заново."
          );
        } else if (err === "Ошибка: 500") {
          setLoginToolText(
            "Ошибка сервера. Попробуйте повторить попытку позже."
          );
        }
      });
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    auth
      .getContent()
      .then((res) => {
        setLoggedIn(true);
        navigate(location.pathname, { replace: true });
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleEditPopupOpen() {
    setEditProfilePopupOpen(true);
  }

  function handleEditPopupClose() {
    setEditProfilePopupOpen(false);
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .editProfile(name, email)
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
        setUpdSuccess(true);
        setUpdToolText("Изменение данных прошло успешно!");
        setTimeout(setUpdToolText, 3000, "");
        setTimeout(setEditProfilePopupOpen, 3000, false);
      })
      .catch((err) => {
        setUpdFail(true);
        if (err === "Ошибка: 401") {
          setUpdToolText("Неверные данные пользователя");
        } else if (err === "Ошибка: 400") {
          setUpdToolText(
            "Что-то пошло не так. Попробуйте ввести данные заново."
          );
        } else if (err === "Ошибка: 500") {
          setUpdToolText("Ошибка сервера. Попробуйте повторить попытку позже.");
        }
      });
  }

  function handleLogOut() {
    auth
      .logout()
      .then((res) => {
        console.log(res);
        setLoggedIn(false);
        localStorage.setItem("filmName", "");
        localStorage.setItem("initialFilms", "");
        localStorage.setItem("foundFilms", "");
        localStorage.setItem("isShort", false);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardSave(card) {
    console.log("save");
    mainApi
      .saveFilm(card)
      .then((res) => {
        const savedCard = res.data;
        setSavedFilms([...savedFilms, savedCard]);
        setSaveSuccess(true);
      })
      .catch((err) => {
        setSaveFail(true);
        setCardToolText(
          "Не удалось сохранить фильм. Попробуйте перезагрузить страницу и попробовать снова."
        );
        console.log(err);
      })
      .finally(() => {
        setTimeout(setSaveFail, 5000, false);
      });
  }

  function handleCardDelete(card) {
    console.log(card);
    const cardToDelete = savedFilms.find((c) => c.movieId === card.id);
    if (typeof card.id === "number") {
      mainApi
        .deleteFilm(cardToDelete._id)
        .then((res) => {
          console.log(res);
          setDeleteSuccess(true);
          setSavedFilms((savedFilms) =>
            savedFilms.filter((c) => c.movieId !== card.id)
          );
        })
        .catch((err) => {
          setDeleteFail(true);
          setCardDeleteToolText(
            "Не удалось удалить фильм. Попробуйте перезагрузить страницу и попробовать снова."
          );
          console.log(err);
        })
        .finally(() => {
          setTimeout(setDeleteFail, 5000, false);
        });
    } else if (typeof card.movieId === "number") {
      mainApi
        .deleteFilm(card._id)
        .then((res) => {
          console.log(res);
          setDeleteSuccess(true);
          setSavedFilms((savedFilms) =>
            savedFilms.filter((c) => c.movieId !== card.movieId)
          );
        })
        .catch((err) => {
          setDeleteFail(true);
          setCardDeleteToolText(
            "Не удалось удалить фильм. Попробуйте перезагрузить страницу и попробовать снова."
          );
          console.log(err);
        })
        .finally(() => {
          setTimeout(setDeleteFail, 5000, false);
        });
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main loggedIn={isLoggedIn} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={isLoggedIn}
                cards={cards}
                setCards={setCards}
                savedFilms={savedFilms}
                setSavedFilms={setSavedFilms}
                onCardSave={handleCardSave}
                isSaveSuccess={isSaveSuccess}
                isSaveFail={isSaveFail}
                cardToolText={cardToolText}
                isDeleteSuccess={isDeleteSuccess}
                isDeleteFail={isDeleteFail}
                cardDeleteToolText={cardDeleteToolText}
                onCardDelete={handleCardDelete}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={isLoggedIn}
                savedFilms={savedFilms}
                setSavedFilms={setSavedFilms}
                foundSavedFilms={foundSavedFilms}
                setFoundSavedFilms={setFoundSavedFilms}
                onCardDelete={handleCardDelete}
                isDeleteSuccess={isDeleteSuccess}
                isDeleteFail={isDeleteFail}
                cardDeleteToolText={cardDeleteToolText}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={isLoggedIn}
                onLogout={handleLogOut}
                isPopupOpen={isEditProfilePopupOpen}
                onPopupOpen={handleEditPopupOpen}
                onPopupClose={handleEditPopupClose}
                onUpdateUser={handleUpdateUser}
                isSuccess={isUpdSuccess}
                isFail={isUpdFail}
                toolText={updToolText}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                isSuccess={isRegSuccess}
                isFail={isRegFail}
                toolText={regToolText}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={handleLogin}
                isSuccess={isLoginSuccess}
                isFail={isLoginFail}
                toolText={loginToolText}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
