import { themeEnum } from '@/theme/types';
import { IBank, IBanksData } from '@/types/bank';
import { ICity, IMapGeo, ISelectedCity } from '@/types/city';

export type CommonBankCardCCType = IMapStateToProps & IMapDispatchToProps;

export interface IMapStateToProps {
  theme: themeEnum;
  banks: IBanksData | null;
  errorMap: string | null;
  searchCurrency: string;
  geo: IMapGeo | null;
}

export interface IMapDispatchToProps {
  setSearchCurrency: (currency: string) => void;
  fetchBanksOfCitiesThunk: (city: ISelectedCity) => void;
  fetchGeoThunk: () => void;
}

export interface IBankCardState {
  selectedBank: IBank | null;
  selectedCity: ISelectedCity;
  viewState: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
}
