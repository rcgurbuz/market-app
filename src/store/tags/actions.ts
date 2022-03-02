import { IAction } from './tags';
import { GET_TAGS, GET_TAGS_SUCCESS, GET_TAGS_FAIL } from './types';

export const getTags = () => {
  return {
    type: GET_TAGS,
  };
};

export const getTagsSuccess = (tags: string[]): IAction<string[]> => {
  return {
    type: GET_TAGS_SUCCESS,
    payload: tags,
  };
};

export const getTagsFail = (error: string[]) => {
  return {
    type: GET_TAGS_FAIL,
    payload: error,
  };
};
