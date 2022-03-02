import { ITagsState, IAction } from './tags';
import { GET_TAGS, GET_TAGS_SUCCESS, GET_TAGS_FAIL } from './types';

const initalState: ITagsState = {
  isLoading: false,
  error: undefined,
  tags: undefined,
};

export default function rootReducer(
  state = initalState,
  action: IAction<string[]>
) {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tags: action.payload,
      };
    case GET_TAGS_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
