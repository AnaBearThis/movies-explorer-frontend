function FilterCheckbox(props) {
    return (
        <div className='filter-checkbox'>
            <button className='search-form__check' type='button' id='short' value='short films' onClick={props.onClick}/>
            <label className='search-form__shortLabel' htmlFor='short'>Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;