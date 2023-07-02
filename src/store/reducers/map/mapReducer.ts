import { ActionsMapType, IMapState } from '@/store/reducers/map/types';

const initialState: IMapState = {
  banksOfCities: null,
  error: null,
  searchCurrency: '',
  geo: null,
};

export const mapReducer = (state = initialState, action: ActionsMapType): IMapState => {
  switch (action.type) {
    case 'MAP/FETCH_BANKS':
      return {
        ...state,
        banksOfCities: action.payload,
      };
    case 'MAP/SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'MAP/SET_SEARCH_CURRENCY':
      return {
        ...state,
        searchCurrency: action.payload.currency,
      };
    case 'MAP/SET_GEO':
      return {
        ...state,
        geo: action.payload.geo,
      };
    default:
      return state;
  }
};
