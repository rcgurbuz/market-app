import React, { FC, useState } from 'react';
import { Title, TagsWrapper, CheckboxWrapper } from './styled';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { addTagsFilter } from '../../../store/filters/action';
import { Dispatch } from 'redux';
import { ITagsState } from '../../../store/tags/tags';

const Tags: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { tags } = useSelector<RootState, ITagsState>(
    (state: RootState) => state?.tags
  );

  return (
    <>
      <Title>Tags</Title>
      <TagsWrapper>
        <TextField
          id='outlined-basic'
          variant='outlined'
          placeholder='Search tags'
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CheckboxWrapper>
          {tags
            ?.filter((item) =>
              item.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    color='primary'
                    value={item}
                    onChange={() => dispatch(addTagsFilter(item))}
                  />
                }
                label={item}
              />
            ))}
        </CheckboxWrapper>
      </TagsWrapper>
    </>
  );
};

export default Tags;
