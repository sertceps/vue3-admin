import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

// 简单封装 Axios
class VAxios {
  private axiosInstance: AxiosInstance;
  private static VAxiosInstance: VAxios;

  private constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.setRequestInterceptors();
    this.setResponseInterceptors();
  }

  /** 创建 axios 实例并返回 */
  public static createAxiosInstance() {
    if (!this.VAxiosInstance) {
      this.VAxiosInstance = new this({
        baseURL: process.env.VUE_APP_BASE_URL,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*",
        },
      });
    }

    return this.VAxiosInstance;
  }

  /** 设置请求拦截器 */
  private setRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (config.headers) {
          config.headers["Authorization"] = "";
        }

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  }

  /** 设置响应拦截器 */
  private setResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(undefined, (error: AxiosError | Error) => {
      if (!axios.isAxiosError(error) || !error.response) return Promise.reject(error.message);

      switch (error.response.status) {
        case 401:
          // logout
          return Promise.reject("请登录后操作");
        case 403:
          // router.replace("/403")
          return Promise.reject("权限不足");
        case 404:
          return Promise.reject("请求地址不存在");
        case 500:
          return Promise.reject("服务器内部错误");
        case 502:
          return Promise.reject("服务器网络错误");
        default:
          return Promise.reject(
            typeof error.response.data === "string" || error.response.data instanceof String ? error.response.data : ""
          );
      }
    });
  }

  /** 通用请求 */
  async request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.request(config);
  }

  /** get请求 */
  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get(url, config);
  }

  /**
   * post 请求
   * @param url 请求地址
   * @param data body 参数
   * @param config axios 配置
   * TODO 要不要约束 data 类型？
   */
  async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.post(url, data, config);
  }

  /**
   * put 请求
   * @param url 请求地址
   * @param data body参数
   * @param config axios 配置
   */
  async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.put(url, data, config);
  }

  /**
   * patch 请求
   * @param url 请求地址
   * @param data body参数
   * @param config axios 配置
   */
  async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.patch(url, data, config);
  }

  /**
   * delete 请求
   * @param url 请求地址
   * @param config axios 配置
   */
  async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.delete(url, config);
  }
}

export default VAxios.createAxiosInstance();
