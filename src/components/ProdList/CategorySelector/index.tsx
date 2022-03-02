import React, { FC, useState } from 'react';
import { categories } from '../../../constants';
import {
  FilterButton,
  FilterButtonWrapper,
  SelectedFilterButton,
} from './styled';
import { useDispatch } from 'react-redux';
import { addItemTypeFilter } from '../../../store/filters/action';
import { Dispatch } from 'redux';

const CategorySelector: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState<number>(0);

  return (
    <FilterButtonWrapper>
      {categories.map((item, index) => (
        <div key={index}>
          {isSelected === index ? (
            <SelectedFilterButton
              onClick={() => {
                dispatch(addItemTypeFilter(item));
                setIsSelected(index);
              }}
            >
              {item}
            </SelectedFilterButton>
          ) : (
            <FilterButton
              onClick={() => {
                dispatch(addItemTypeFilter(item));
                setIsSelected(index);
              }}
            >
              {item}
            </FilterButton>
          )}
        </div>
      ))}
    </FilterButtonWrapper>
  );
};

export default CategorySelector;
