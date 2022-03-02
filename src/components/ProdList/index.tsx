import React, { FC } from 'react';
import CategorySelector from './CategorySelector';

import Prods from './Prods';
import { ProdListWrapper, Title } from './styled';

const ProdList: FC = () => {
  return (
    <ProdListWrapper>
      <Title>Products</Title>
      <CategorySelector />
      <Prods />
    </ProdListWrapper>
  );
};

export default ProdList;
