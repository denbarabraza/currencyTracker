import {
  fetchBanksOfCities,
  setErrorMap,
  setSearchCurrency,
} from '@/store/actions/mapActions';
import { IBanksData } from '@/types/bank';

export interface IMapState {
  banksOfCities: IBanksData | null;
  error: string | null;
  searchCurrency: string;
}

export type ActionsMapType =
  | ReturnType<typeof fetchBanksOfCities>
  | ReturnType<typeof setErrorMap>
  | ReturnType<typeof setSearchCurrency>;
