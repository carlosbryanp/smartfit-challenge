import { Location } from './locations.interface';

export interface UnitsResponse {
  current_country: number;
  locations: Location[];
}
