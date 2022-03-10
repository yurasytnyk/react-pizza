import { FC } from 'react';

import { Props } from '../types/sort-popup-types';
import { SortPopupItem } from '../../sort-popup-item/component';
import '../styles/sort-popup-styles.scss';

export const SortPopup: FC<Props> = (props) => {
  const {
    popupData,
  } = props;

  return (
    <div className="sort__popup">
      <ul className="sort__popup-list">
        {popupData.map((item, indx) => (
          <SortPopupItem
            key={indx}
            active={item.active}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
};
