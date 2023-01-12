import { HeroBtn } from './HeroBtn/HeroBtn';
import { HeroPagesBtn } from './HeroRagesBtn/HeroPagesBtn';
import scss from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={scss.box}>
      <div className={scss.container}>
        <p className={scss.text}>New collection</p>
        <h1 className={scss.title}>Menswear 2023</h1>
        <HeroBtn></HeroBtn>
        <HeroPagesBtn></HeroPagesBtn>
      </div>
    </div>
  );
};
