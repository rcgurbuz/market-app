import React, { FC, useState } from 'react';
import { Title, BrandsWrapper, CheckboxWrapper } from './styled';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { addBrandsFilter } from '../../../store/filters/action';
import { Dispatch } from 'redux';
import { ICompaniesState } from '../../../store/companies/companies';

const Brands: FC = () => {
  const dispatch: Dispatch = useDispatch();

  const { companies } = useSelector<RootState, ICompaniesState>(
    (state: RootState) => state?.companies
  );

  const [search, setSearch] = useState<string>('');

  return (
    <>
      <Title>Brands</Title>
      <BrandsWrapper>
        <TextField
          id='outlined-basic'
          variant='outlined'
          placeholder='Search brand'
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CheckboxWrapper>
          {companies
            ?.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    value={item}
                    color='primary'
                    onChange={() => dispatch(addBrandsFilter(item?.slug))}
                  />
                }
                label={item?.name}
              />
            ))}
        </CheckboxWrapper>
      </BrandsWrapper>
    </>
  );
};

export default Brands;
