export interface Api {
  get(param1: string, param2: string): Promise<void>;
  post(param1: string, param2: string): Promise<void>;
}
