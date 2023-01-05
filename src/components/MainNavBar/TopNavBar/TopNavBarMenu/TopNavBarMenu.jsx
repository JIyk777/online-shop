import scss from './TopNavBarMenu.module.scss';

export const TopNavBarMenu = () => {
  return (
    <div className={scss.box}>
      <a href="/">Delivery & returns</a>
      <a href="/">Track order</a>
      <a href="/">Blog</a>
      <a href="/">Contacts</a>
    </div>
  );
};
