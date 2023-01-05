import { CiSearch } from 'react-icons/ci';
import scss from './SearchInput.module.scss';

export const SearchInput = () => {
  return (
    <div className={scss.searchBox}>
      <input
        className={scss.searchInput}
        type="text"
        placeholder="Search for products..."
      />
      <CiSearch className={scss.searchIcon}></CiSearch>
    </div>
  );
};
