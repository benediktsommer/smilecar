import { memo } from 'react';

import { IOffer } from '../../../../interfaces/offer.interface';

import { OfferView } from './OfferView';

interface IProps {
  offer: IOffer;
}

export const Offer = memo(({ offer }: IProps) => {
  const handleNextButtonClick = () => {
    window.open(offer.bookingFormUrl, '_blank');
  };

  return <OfferView offer={offer} handleNextButton={handleNextButtonClick} />;
});
