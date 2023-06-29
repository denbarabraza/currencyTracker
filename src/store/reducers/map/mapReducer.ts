import { ActionsMapType, IMapState } from '@/store/reducers/map/types';

const initialState: IMapState = {
  banksOfCities: null,
};

export const mapReducer = (state = initialState, action: ActionsMapType): IMapState => {
  switch (action.type) {
    case 'MAP/FETCH_BANKS':
      return {
        ...state,
        banksOfCities: action.payload,
      };
    default:
      return state;
  }
};
