import { HeroBtn } from './HeroBtn/HeroBtn';
import { HeroPagesBtn } from './HeroRagesBtn/HeroPagesBtn';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import scss from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={scss.box}>
      <div className={scss.container}>
        <button className={scss.slideLeftBtn} type="button">
          <FiArrowLeft className={scss.slideIcon}></FiArrowLeft>
        </button>
        <button className={scss.slideRightBtn} type="button">
          <FiArrowRight className={scss.slideIcon}></FiArrowRight>
        </button>
        <p className={scss.text}>New collection</p>
        <h1 className={scss.title}>Menswear 2023</h1>
        <HeroBtn></HeroBtn>
        <HeroPagesBtn></HeroPagesBtn>
      </div>
    </div>
  );
};
