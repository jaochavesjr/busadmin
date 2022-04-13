export interface IResponseContract<T = any> {
  status: string;
  message?: string;
  data?: T;
}
