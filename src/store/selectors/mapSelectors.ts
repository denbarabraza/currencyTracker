import { RootStoreType } from '@/store/store';

export const getBanksSelector = (state: RootStoreType) => state.map.banksOfCities;
