import searchTransp from '../../images/searchTransparent.png';
import searchColor from '../../images/searchColored.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <img className="searchForm__icon" src={searchTransp} alt='иконка поиска'/>
                <input 
                    className='searchForm__input'
                    // value={a}
                    // onChange={a}
                    id="input-film"
                    type="string"
                    name="filmName"
                    placeholder="Фильм"
                    required
                />
                <button type="submit" className="searchForm__submit-button" value="искать"><img className='searchForm__submit-button-icon' src={searchColor} alt='искать'/></button>  
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;