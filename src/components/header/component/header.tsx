import { FC } from 'react';

import { Logo } from '../../logo/component';
import { HeaderCart } from '../../header-cart/component';
import PizzaSvg from '../../../assets/img/pizza-logo.svg';
import '../styles/header-styles.scss';

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo
          imgSrc={PizzaSvg}
          logoTitle="React pizza"
          logoText="the most delicious pizza in the universe"
        />

        <HeaderCart />
      </div>
    </div>
  );
};
