import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import { SearchInput } from './SearchInput/SearchInput';
import { FavoritesBtn } from './FavoritesBtn/FavoritesBtn';
import scss from './BottomNavBar.module.scss';

export const BottomNavBar = () => {
  return (
    <div className={scss.container}>
      <Logo></Logo>
      <Menu></Menu>
      <SearchInput></SearchInput>
      <FavoritesBtn></FavoritesBtn>
    </div>
  );
};
