type SortingTypes = {
  value: string;
  label: string;
  _sort: string;
  _order: string;
};

export const sortingsOpt: SortingTypes[] = [
  {
    value: 'priceLtH',
    _sort: 'price',
    _order: 'asc',
    label: 'Price low to high',
  },
  {
    value: 'priceHtT',
    _sort: 'price',
    _order: 'desc',
    label: 'Price high to low',
  },
  {
    value: 'dateOtN',
    _sort: 'added',
    _order: 'asc',
    label: 'Old to new',
  },
  {
    value: 'dateNtO',
    _sort: 'added',
    _order: 'desc',
    label: 'New to old',
  },
];

export const categories: string[] = ['mug', 'shirt'];
