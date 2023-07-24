import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedMoviesList from "../SavedMoviesList/SavedMoviesList.jsx";

function SavedMovies() {
    return (
        <div className="savedMovies">
            <Header />
            <SearchForm />
            <SavedMoviesList />
            <Footer />
        </div>
    )
}

export default SavedMovies;