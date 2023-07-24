import Header from '../Header/Header.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import More from '../More/More.jsx';
import Footer from '../Footer/Footer.jsx';

function Movies() {
    return (
        <div className="movies">
            <Header />
            <SearchForm />
            <MoviesCardList />
            <More />
            <Footer />
        </div>
    )
}

export default Movies;