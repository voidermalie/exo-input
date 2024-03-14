import searchIcon from '../../../assets/search.png';
import Input from '../../Input/Input';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <Input onSubmit={onSearch} />
      <img src={searchIcon} alt={'search'} id={'search-icon'} />
    </div>
  );
};

export default SearchBar;
