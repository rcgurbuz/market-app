import React, { FC, useState } from 'react';
import { Grid } from '@material-ui/core';
import ProdItem from './ProdItem';
import { ProdsWrapper, PaginationWrapper } from './styled';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { IProdsState } from '../../../store/products/products';

const Prods: FC = () => {
  const { prods, totalPages } = useSelector<RootState, IProdsState>(
    (state: RootState) => state?.products
  );

  const [pageNumber, setPageNumber] = useState<number>(0);

  const productsPerPage: number = 16;
  const pagesVisited: number = pageNumber * productsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ProdsWrapper>
        <Grid container spacing={2}>
          {prods &&
            prods
              ?.slice(pagesVisited, pagesVisited + productsPerPage)
              ?.map((item, index) => (
                <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                  <ProdItem key={index} item={item} />
                </Grid>
              ))}
        </Grid>
      </ProdsWrapper>
      <PaginationWrapper>
        <ReactPaginate
          pageCount={totalPages}
          previousLabel='&larr; Prev'
          nextLabel='Next &rarr;'
          activeClassName={'activePage'}
          onPageChange={changePage}
        />
      </PaginationWrapper>
    </>
  );
};

export default Prods;
