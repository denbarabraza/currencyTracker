import {
  fetchBanksOfCities,
  setErrorMap,
  setGeoPosition,
  setSearchCurrency,
} from '@/store/actions/mapActions';
import { IBanksData } from '@/types/bank';
import { IMapGeo } from '@/types/city';

export interface IMapState {
  banksOfCities: IBanksData | null;
  error: string | null;
  searchCurrency: string;
  geo: IMapGeo | null;
}

export type ActionsMapType =
  | ReturnType<typeof fetchBanksOfCities>
  | ReturnType<typeof setErrorMap>
  | ReturnType<typeof setSearchCurrency>
  | ReturnType<typeof setGeoPosition>;
