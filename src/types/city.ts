export interface ICity {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
}

export type ISelectedCity = Omit<ICity, 'id' | 'city'>;

export interface IMapGeo {
  longitude: number;
  latitude: number;
}
