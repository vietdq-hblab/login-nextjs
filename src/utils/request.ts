import axios, { InternalAxiosRequestConfig } from "axios";

declare module "axios" {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig & {
        onError?: (res: any) => void;
        selfException?: boolean;
      }
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}

const instance = axios.create({
  baseURL: "localhost:8080/api", // domain api
  headers: {
    "content-type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    //config request
    //kiem tra neu co token roi thi vat vao header
    const token = localStorage.get("token");

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res: any) => {
    //config response
    return res;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
