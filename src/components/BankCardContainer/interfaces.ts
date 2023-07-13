import { themeEnum } from '@/theme/types';
import { IBank, IBanksData } from '@/types/bank';
import { IGeoCity, IMapGeo } from '@/types/city';

export interface ICommonBankCardContainer extends IMapStateToProps, IMapDispatchToProps {}

export interface ICommonBankCard extends Omit<ICommonBankCardContainer, 'errorMap'> {}

export interface IMapStateToProps {
  theme: themeEnum;
  banks: IBanksData | null;
  errorMap: string | null;
  searchCurrency: string;
  geo: IMapGeo | null;
}

export interface IMapDispatchToProps {
  setSearchCurrency: (currency: string) => void;
  fetchBanksOfCitiesThunk: (city: IGeoCity) => void;
  fetchGeoThunk: () => void;
}

export interface IBankCardState {
  selectedBank: IBank | null;
  viewState: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
}
