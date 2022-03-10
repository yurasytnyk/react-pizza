import { FC } from "react";
import clsx from "clsx";

import { Props } from '../types/sort-popup-types';
import '../styles/sort-popup-item-styles.scss';

export const SortPopupItem: FC<Props> = (props) => {
  const {
    active,
    text,
  } = props;
  const classes = clsx(
    'sort__popup-item',
    active && 'active',
  );

  return (
    <li className={classes}>
      {text}
    </li>
  );
};
