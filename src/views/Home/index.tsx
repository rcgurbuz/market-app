import React, { FC, useEffect } from 'react';
import { Container } from '../../theme';
import { Grid } from '@material-ui/core';
import Filters from '../../components/Filters';
import ProdList from '../../components/ProdList';
import Basket from '../../components/Basket';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from '../../store/companies/action';
import { getProducts } from '../../store/products/action';
import { getTags } from '../../store/tags/actions';
import { RootState } from '../../store/store';
import { Dispatch } from 'redux';
import { IFilterState } from '../../store/filters/filters';

const Home: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const filterState = useSelector<RootState, IFilterState>(
    (state: RootState) => state?.filters
  );

  useEffect(() => {
    dispatch(getCompanies());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, filterState]);

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={3} xs={12}>
            <Filters />
          </Grid>
          <Grid item lg={6} xs={12}>
            <ProdList />
          </Grid>
          <Grid item lg={3} xs={12}>
            <Basket />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
