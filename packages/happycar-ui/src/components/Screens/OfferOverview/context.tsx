import { createContext, useReducer, useContext, useEffect, memo } from 'react';

import { initialOfferState, IOfferState, offerReducer } from './reducer';
import { OfferListStateActions } from './action';

interface IOfferStateContextType {
  offerList: IOfferState;
}

interface IOfferDispatchContextType {
  dispatch: React.Dispatch<OfferListStateActions>;
}

const OfferStateContext = createContext<IOfferStateContextType>({
  offerList: initialOfferState,
});

const OfferDispatchContext = createContext<IOfferDispatchContextType>({
  dispatch: () => {
    throw new Error('ApplicationListProvider is missing');
  },
});

export const OfferProvider = memo(({ children }) => {
  const [offerList, dispatch] = useReducer(offerReducer, initialOfferState);

  return (
    <OfferDispatchContext.Provider value={{ dispatch }}>
      <OfferStateContext.Provider value={{ offerList }}>
        {children}
      </OfferStateContext.Provider>
    </OfferDispatchContext.Provider>
  );
});

export const useOfferListState = () => useContext(OfferStateContext);
export const useOfferListDispatch = () => useContext(OfferDispatchContext);
