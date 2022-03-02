import React, { FC } from 'react';
import { FilterWrapper } from './styled';
import Brands from './Brands';
import Sorting from './Sorting';
import Tags from './Tags';

const Filters: FC = () => {
  return (
    <FilterWrapper>
      <Sorting />
      <Brands />
      <Tags />
    </FilterWrapper>
  );
};

export default Filters;
