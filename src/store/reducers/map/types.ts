import { fetchBanksOfCities } from '@/store/actions/mapActions';
import { IBanksData } from '@/types/IBank';

export interface IMapState {
  banksOfCities: IBanksData | null;
}

export type ActionsMapType = ReturnType<typeof fetchBanksOfCities>;
