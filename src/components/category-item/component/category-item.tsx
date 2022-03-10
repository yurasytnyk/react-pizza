import { FC } from 'react';

import { Props } from '../types/category-item-types';

export const CategoryItem: FC<Props> = (props) => {
  const { category } = props;

  return (
    <li>{category}</li>
  );
};
