import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Searchbar = props => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => props.onSubmit(e)}>
        <button type="submit" className="SearchForm-button">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            style={{ color: '#000000' }}
          />
        </button>
        <input
          className="SearchForm-input"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
