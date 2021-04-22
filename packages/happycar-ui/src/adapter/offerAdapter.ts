import axios from 'axios';

import { config } from '../constants/config';
import { IOffer } from '../interfaces/offer.interface';
import { IFilter } from '../interfaces/filter.interface';

export const offerAdapter = async (): Promise<{
  offers: IOffer[];
  filter: IFilter;
}> => {
  const response = await axios.get(`${config.api.happycar.host}/offers`);

  return {
    offers: response.data.offers,
    filter: response.data.filter,
  };
};
