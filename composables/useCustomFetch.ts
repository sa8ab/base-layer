import { AsyncDataOptions } from "#app";
import { AxiosResponse } from "axios";

type Req<T> = () => Promise<AxiosResponse<T> | T | void | {}>;

export const useCustomFetch = <T>(
  req: Req<T>,
  options: AsyncDataOptions<T> & { key?: string } = {}
) => {
  const { key, ...mainOptions } = options;
  const errorHandledReq = async () => {
    try {
      const res = await req();
      return res || {};
    } catch (e) {
      console.log(e);
      if (process.client) {
        showError({
          message: "Page Not Found",
          statusCode: 404,
        });
      }
    }
  };
  const params:
    | [string, Req<T>, AsyncDataOptions<T>]
    | [Req<T>, AsyncDataOptions<T>] = key
    ? [key, errorHandledReq, mainOptions]
    : [errorHandledReq, mainOptions];

  // @ts-ignore
  return useLazyAsyncData<T>(...params);
};
