import { client } from './api';
import qs from 'qs';
import { endpoints } from './endpoints';

export const services = {
  getProductService: (params) => {
    const queryString = qs.stringify(
      {
        ...params,
      },
      {
        arrayFormat: 'repeat',
      }
    );
    return client.get(`${endpoints.url('items')}?${queryString}`);
  },
  getCompanyService: () => client.get(endpoints.url('companies')),
};
