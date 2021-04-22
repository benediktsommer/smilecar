const Dependencies = {
  /* Utils */
  Logger: Symbol('Logger'),
  Config: Symbol('Config'),

  /* Routes */
  Routes: Symbol('Routes'),

  /* Controller */
  UpController: Symbol('UpController'),
  OfferController: Symbol('OfferController'),

  /* Interactor */
  OfferInteractor: Symbol('OfferInteractor'),

  /* Service */
  OfferService: Symbol('OfferService')
}

export default Dependencies;
