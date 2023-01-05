import scss from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={scss.box}>
      <a href="/">Women</a>
      <a href="/">Men</a>
      <a href="/">Girls</a>
      <a href="/">Boys</a>
      <a href="/">Sale</a>
    </div>
  );
};
