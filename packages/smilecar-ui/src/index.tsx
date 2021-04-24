import React, { Suspense } from 'react';
import { render } from 'react-dom';

import { SmileCar } from './components/App';

// eslint-disable-next-line
import './constants/i18n-initiation';

render(
  <Suspense fallback={null}>
    <SmileCar />
  </Suspense>,
  document.getElementById('root')
);
