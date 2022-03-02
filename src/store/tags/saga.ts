import { call, put } from 'redux-saga/effects';
import { client } from '../../services/api';
import { getTagsSuccess } from './actions';
import { IAction } from './tags';

const fetchTags = () =>
  client.request({
    method: 'GET',
    url: 'items',
  });

export function* handleGetTags(action: IAction<string[]>): any {
  try {
    const response = yield call(fetchTags);

    if (response) {
      const sortTags = () => {
        let tags: string[] = [];
        response.data.forEach((item) => {
          item.tags.forEach((i) => {
            tags.push(i);
          });
        });

        // eslint-disable-next-line no-undef
        const newTags = Array.from(new Set(tags));

        return newTags;
      };
      yield put(getTagsSuccess(sortTags()));
    }
  } catch (error) {
    console.log(error);
  }
}
