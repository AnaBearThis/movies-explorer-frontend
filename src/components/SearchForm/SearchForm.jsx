import searchTransp from '../../images/iconsearchTransparent.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <div className='search-form__container'>
                    <img className="search-form__icon" src={searchTransp} alt='иконка поиска'/>
                    <input 
                        className='search-form__input'
                        // value={a}
                        // onChange={a}
                        id="input-film"
                        type="string"
                        name="filmName"
                        placeholder="Фильм"
                        required
                    />
                    <button type="submit" className="search-form__submit-button" value="искать"></button> 
                </div> 
                <FilterCheckbox />
            </form>
        </section>
    )
}

export default SearchForm;