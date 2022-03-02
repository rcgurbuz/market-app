import { IActions, IFilterState } from './filters';
import {
  ADD_BRANDS_FILTER,
  ADD_SORT_FILTER,
  ADD_TAGS_FILTER,
  ADD_ITEM_TYPE_FILTER,
} from './types';

const initalState: IFilterState = {
  _sort: 'price',
  _order: 'asc',
  manufacturer: [],
  tags: [],
  itemType: 'mug',
};

export default function rootReducer(state = initalState, action: IActions) {
  switch (action.type) {
    case ADD_TAGS_FILTER:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };

    case ADD_BRANDS_FILTER:
      if (state.manufacturer?.includes(action?.payload)) {
        let tempArr = state.manufacturer?.filter(
          (item) => item !== action?.payload
        );
        console.log(tempArr);
        return {
          ...state,
          manufacturer: tempArr,
        };
      } else {
        return {
          ...state,
          manufacturer: [...state.manufacturer, action.payload],
        };
      }

    case ADD_SORT_FILTER:
      return {
        ...state,
        _sort: action.payload?._sort,
        _order: action.payload?._order,
      };
    case ADD_ITEM_TYPE_FILTER:
      return {
        ...state,
        itemType: action.payload,
      };

    default:
      return state;
  }
}
