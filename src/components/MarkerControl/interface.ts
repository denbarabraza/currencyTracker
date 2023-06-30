import { IBank } from '@/types/IBank';

export interface IMarkerControl {
  currentBanks: IBank[] | undefined;
  selectedBank: IBank | null;
  setSelectedBank: (bank: IBank | null) => void;
}
