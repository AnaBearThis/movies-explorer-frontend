function FilterCheckbox() {
    return (
        <div className='filterCheckbox'>
            <input className='searchForm__check' type='checkbox' id='short' value='short films'/>
            <label className='searchForm__shortLabel' for='short'>Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;