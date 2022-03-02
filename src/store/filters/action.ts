import { IAction } from './filters';
import {
  ADD_BRANDS_FILTER,
  ADD_ITEM_TYPE_FILTER,
  ADD_SORT_FILTER,
  ADD_TAGS_FILTER,
} from './types';

export const addTagsFilter = (filter: string): IAction<string> => {
  return {
    type: ADD_TAGS_FILTER,
    payload: filter,
  };
};
export const addBrandsFilter = (filter: string): IAction<string> => {
  return {
    type: ADD_BRANDS_FILTER,
    payload: filter,
  };
};

export const addSortFilter = (
  _sort: string,
  _order: string
): IAction<{ _sort: string; _order: string }> => {
  return {
    type: ADD_SORT_FILTER,
    payload: { _sort, _order },
  };
};

export const addItemTypeFilter = (filter: string): IAction<string> => {
  return {
    type: ADD_ITEM_TYPE_FILTER,
    payload: filter,
  };
};
