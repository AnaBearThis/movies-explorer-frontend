import SavedMovieCard from "../SavedMovieCard/SavedMovieCard.jsx";

function SavedMoviesList() {
    return (
        <section>
            <ul className="saved-movies-list">
                <li>
                    <SavedMovieCard />
                </li>
                <li>
                    <SavedMovieCard />
                </li>
                <li>
                    <SavedMovieCard />
                </li>
            </ul>
        </section>
    )
};

export default SavedMoviesList;