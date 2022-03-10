import { FC } from 'react';

import { Props } from '../types/header-logo-text-types';
import '../styles/header-logo-text-styles.scss';

export const HeaderLogoText: FC<Props> = (props) => {
  const { 
    logoTitle, 
    logoText, 
  } = props;

  return (
    <div className="header__text">
      <h1 className="header__text-title">{logoTitle}</h1>
      <p className="header__text-descr">{logoText}</p>
    </div>
  );
};
