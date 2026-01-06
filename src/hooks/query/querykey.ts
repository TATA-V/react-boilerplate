import { createQueryKeys } from '@lukemorales/query-key-factory';

export enum QUERY_KEY {
  AUTH = 'auth',
}

export const authKeys = createQueryKeys(QUERY_KEY.AUTH, {
  user: (params) =>  [params],
});