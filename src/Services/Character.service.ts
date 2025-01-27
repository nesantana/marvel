import axios, { AxiosStatic, AxiosInstance } from "axios";
import { ApiResponse } from "@src/Interfaces/";
import { defaultQuery } from "@src/Utils/defaultQuery";

class CharacterApi {
  public request: AxiosInstance;

  constructor(protected axiosStatic: AxiosStatic = axios) {
    this.request = axiosStatic.create({
      baseURL: process.env.REACT_APP_BASE_URL + "characters",
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

  public async getEventsByCharacterId<T>(
    id: string,
    query?: any
  ): Promise<ApiResponse<T>> {
    const params = {
      ...defaultQuery,
      ...query,
    };

    return this.request.get<T>(id + "/events", { params });
  }

  public async getComicsByCharacterId<T>(
    id: string,
    query?: any
  ): Promise<ApiResponse<T>> {
    const params = {
      ...defaultQuery,
      ...query,
    };

    return this.request.get<T>(id + "/comics", { params });
  }
}

const characterApi = new CharacterApi();

export { characterApi };
