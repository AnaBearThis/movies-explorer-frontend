import Header from "../Header/Header.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedMoviesList from "../SavedMoviesList/SavedMoviesList.jsx";

function SavedMovies() {
    return (
        <main className="saved-movies">
            <Header />
            <SearchForm />
            <SavedMoviesList />
            <Footer />
        </main>
    )
}

export default SavedMovies;