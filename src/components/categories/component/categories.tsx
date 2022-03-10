import { FC } from 'react';
import { CategoryItem } from '../../category-item/component';

import { Props } from '../types/categories-types';
import '../styles/categories-styles.scss';

export const Categories: FC<Props> = (props) => {
  const {
    categoriesData,
  } = props;

  return (
    <div className="categories">
      <ul>
        {categoriesData.map((category, indx) => (
          <CategoryItem 
            key={indx}
            category={category} 
          />
        ))}
      </ul>
    </div>
  );
};
