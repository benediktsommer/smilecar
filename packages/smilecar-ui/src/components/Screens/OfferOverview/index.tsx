import { memo } from 'react';

import { OfferOverview } from '../../OfferOverview';

import { OfferProvider } from './context';

export default memo(() => {
  return (
    <OfferProvider>
      <OfferOverview />
    </OfferProvider>
  );
});
