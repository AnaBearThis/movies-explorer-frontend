function FilterCheckbox() {
    return (
        <div className='filter-checkbox'>
            <input className='search-form__check' type='checkbox' id='short' value='short films'/>
            <label className='search-form__shortLabel' htmlFor='short'>Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;