import { themeEnum } from '@/theme/types';
import { IBank, IBanksData } from '@/types/bank';
import { ICity } from '@/types/city';

export type CommonBankCardCCType = IMapStateToProps & IMapDispatchToProps;

export interface IMapStateToProps {
  theme: themeEnum;
  banks: IBanksData | null;
  errorMap: string | null;
  searchCurrency: string;
}

export interface IMapDispatchToProps {
  setSearchCurrency: (currency: string) => void;
  fetchBanksOfCitiesThunk: (city: ICity) => void;
}

export interface IBankCardState {
  selectedBank: IBank | null;
  selectedCity: ICity;
  viewState: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
}
