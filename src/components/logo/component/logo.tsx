import { FC } from 'react';

import { Props } from '../types/logo-types';
import { HeaderLogoText } from '../../header-logo-text/component';
import '../styles/logo-styles.scss';

export const Logo: FC<Props> = (props) => {
  const {
    imgSrc,
    logoTitle,
    logoText,
  } = props;

  return (
    <div className="header__logo">
      <img
        className="logo"
        src={imgSrc}
        alt="Pizza logo" 
      />
      
      <HeaderLogoText 
        logoTitle={logoTitle}
        logoText={logoText}
      />
    </div>
  );
};
