import {
  fetchBanksOfCities,
  setErrorMap,
  setGeoPosition,
  setSearchCurrency,
} from '@/store/actions/mapActions';
import { mapReducer } from '@/store/reducers/map/mapReducer';
import { IMapState } from '@/store/reducers/map/types';
import { IBanksData } from '@/types/bank';
import { IMapGeo } from '@/types/city';

describe('mapReducer', () => {
  const initialState: IMapState = {
    banksOfCities: null,
    error: null,
    searchCurrency: '',
    geo: null,
  };

  const banks: IBanksData = {
    results: [
      {
        fsq_id: '123',
        categories: [{ id: 1, name: 'bank', icon: { prefix: '', suffix: '' } }],
        chains: [],
        distance: 1.23,
        geocodes: { main: { latitude: 1.23, longitude: 4.56 } },
        link: '',
        location: {
          address: '',
          country: '',
          cross_street: '',
          formatted_address: '',
          postcode: '',
          locality: '',
          region: '',
        },
        name: 'Bank of America',
        related_places: {},
        timezone: 'America/New_York',
      },
    ],
    context: {
      geo_bounds: {
        circle: {
          center: {
            latitude: 1.23,
            longitude: 4.56,
          },
          radius: 1.23,
        },
      },
    },
  };

  it('should handle MAP/FETCH_BANKS', () => {
    const action = fetchBanksOfCities(banks);
    const newState = mapReducer(initialState, action);

    expect(newState.banksOfCities).toEqual(banks);
  });

  it('should handle MAP/SET_ERROR', () => {
    const error = 'Something went wrong';
    const action = setErrorMap(error);
    const newState = mapReducer(initialState, action);

    expect(newState.error).toEqual(error);
  });

  it('should handle MAP/SET_SEARCH_CURRENCY', () => {
    const currency = 'USD';
    const action = setSearchCurrency(currency);
    const newState = mapReducer(initialState, action);

    expect(newState.searchCurrency).toEqual(currency);
  });

  it('should handle MAP/SET_GEO', () => {
    const geo: IMapGeo = { latitude: 1.23, longitude: 4.56 };
    const action = setGeoPosition(geo);
    const newState = mapReducer(initialState, action);

    expect(newState.geo).toEqual(geo);
  });
});

describe('fetchBanksOfCities', () => {
  const banks: IBanksData = {
    results: [
      {
        fsq_id: '123',
        categories: [{ id: 1, name: 'bank', icon: { prefix: '', suffix: '' } }],
        chains: [],
        distance: 1.23,
        geocodes: { main: { latitude: 1.23, longitude: 4.56 } },
        link: '',
        location: {
          address: '',
          country: '',
          cross_street: '',
          formatted_address: '',
          postcode: '',
          locality: '',
          region: '',
        },
        name: 'Bank of America',
        related_places: {},
        timezone: 'America/New_York',
      },
    ],
    context: {
      geo_bounds: {
        circle: {
          center: {
            latitude: 1.23,
            longitude: 4.56,
          },
          radius: 1.23,
        },
      },
    },
  };

  it('should create an action to fetch banks of cities', () => {
    const expectedAction = {
      type: 'MAP/FETCH_BANKS',
      payload: banks,
    };

    expect(fetchBanksOfCities(banks)).toEqual(expectedAction);
  });
});

describe('setErrorMap', () => {
  it('should create an action to set the map error', () => {
    const error = 'Something went wrong';
    const expectedAction = {
      type: 'MAP/SET_ERROR',
      payload: { error },
    };

    expect(setErrorMap(error)).toEqual(expectedAction);
  });
});

describe('setSearchCurrency', () => {
  it('should create an action to set the search currency', () => {
    const currency = 'USD';
    const expectedAction = {
      type: 'MAP/SET_SEARCH_CURRENCY',
      payload: { currency },
    };

    expect(setSearchCurrency(currency)).toEqual(expectedAction);
  });
});

describe('setGeoPosition', () => {
  it('should create an action to set the map geo position', () => {
    const geo: IMapGeo = { latitude: 1.23, longitude: 4.56 };
    const expectedAction = {
      type: 'MAP/SET_GEO',
      payload: { geo },
    };

    expect(setGeoPosition(geo)).toEqual(expectedAction);
  });
});
