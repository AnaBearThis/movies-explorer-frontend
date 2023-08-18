class MoviesApi {
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

    getCards() {
        return fetch(`${this._url}`, {
            headers: this._headers,
        })
        .then((res) => {
           return this._checkResponse(res)
        });
    }

}

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'content-type': 'application/json',
    }
})

export default moviesApi;