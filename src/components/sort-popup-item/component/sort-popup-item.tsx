import { FC } from "react";

import { Props } from '../types/sort-popup-types';

export const SortPopupItem: FC<Props> = (props) => {
  const {
    active,
    text,
  } = props;

  return (
    <li
      className={active ? 'active': ''}
    >
      {text}
    </li>
  );
};
