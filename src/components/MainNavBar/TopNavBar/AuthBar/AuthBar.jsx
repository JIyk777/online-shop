import scss from './AuthBar.module.scss';
import { CiUser } from 'react-icons/ci';

export const AuthBar = () => {
  return (
    <div className={scss.box}>
      <CiUser></CiUser>
      <a href="/">Log In</a>
      <span>/</span>
      <a href="/">Register</a>
    </div>
  );
};
