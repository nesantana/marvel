import axios, { AxiosStatic, AxiosInstance } from "axios";
import { ApiResponse } from "@src/Interfaces/";
import { defaultQuery } from "@src/Utils/defaultQuery";

class EventsApi {
  public request: AxiosInstance;

  constructor(protected axiosStatic: AxiosStatic = axios) {
    this.request = axiosStatic.create({
      baseURL: process.env.REACT_APP_BASE_URL + "events",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
  }

  public async get<T>(query?: any): Promise<ApiResponse<T>> {
    const params = {
      ...defaultQuery,
      ...query,
    };

    return this.request.get<T>("", { params });
  }

  public async getId<T>(id: string, query?: any): Promise<ApiResponse<T>> {
    const params = {
      ...defaultQuery,
      ...query,
    };

    return this.request.get<T>(id, { params });
  }
}

const eventsApi = new EventsApi();

export { eventsApi };
