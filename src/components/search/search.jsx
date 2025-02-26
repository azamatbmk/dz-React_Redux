import Button from '../button/button'
import InputSearch from '../Input/input';
import './search.css'

function Search() {
  

  return (
    <div className='search-wrapper'>
      <h1>ПОИСК</h1>
      <p>
        Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
      </p>
      <div className='search-button'>
        <InputSearch />
        <Button text="Искать"/>
      </div>
    </div>
  )
}

export default Search;