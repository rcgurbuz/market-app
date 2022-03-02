import React, { FC, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { sortingsOpt } from '../../../constants';
import { Title, SortingWrapper } from './styled';
import { addSortFilter } from '../../../store/filters/action';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const Sorting: FC = () => {
  const dispatch: Dispatch = useDispatch();

  const [value, setValue] = useState('priceLtH');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <Title>Sorting</Title>
      <SortingWrapper>
        <RadioGroup
          aria-label='sort'
          name='sortRadio'
          value={value}
          onChange={handleChange}
        >
          {sortingsOpt.map(({ value, label, _sort, _order }, index) => (
            <FormControlLabel
              key={index}
              value={value}
              control={
                <Radio
                  color='primary'
                  onChange={() => dispatch(addSortFilter(_sort, _order))}
                />
              }
              label={label}
            />
          ))}
        </RadioGroup>
      </SortingWrapper>
    </>
  );
};

export default Sorting;
