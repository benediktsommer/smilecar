export interface IBaseInteractor<TRequestModel, TResponseModel> {
  interact(request: TRequestModel): Promise<TResponseModel>;
}
