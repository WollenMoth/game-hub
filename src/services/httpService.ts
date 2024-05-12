import http from "./apiClient";

interface ReadResponse<T> {
  count: number;
  results: T[];
}

export class HttpService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  read() {
    const controller = new AbortController();

    const request = http.get<ReadResponse<T>>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default create;
