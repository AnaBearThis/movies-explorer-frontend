class MainApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            credentials: "include"
        })
        .then((res) => {
            return this._checkResponse(res)
        });
    }

    editProfile(name, email) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email
              }),
            credentials: "include"
        })
        .then((res) => {
            return this._checkResponse(res);
         });
    }

    getFilms() {
        return fetch(`${this._url}/movies`, {
            headers: this._headers,
            credentials: "include"
        })
        .then((res) => {
           return this._checkResponse(res)
        });
    }

    saveFilm(card) {
        console.log(card.image.url)
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                nameRU: card.nameRU,
                nameEN: card.nameEN,
                country: card.country,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: `https://api.nomoreparties.co/${card.image.url}`,
                trailerLink: card.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
                movieId: card.id,
            }),
            credentials: "include"
        })
        .then((res) => {
            return this._checkResponse(res);
        });
    }

    deleteFilm(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: "include"
        })
        .then((res) => {
            return this._checkResponse(res)
         });
    }

}

const moviesApi = new MainApi({
    url: 'api.movies-ana-bear.nomoredomains.xyz',
    headers: {
        'content-type': 'application/json',
    }
})

export default moviesApi;