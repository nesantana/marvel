import { hashApi } from "./hashApi";

export const defaultQuery = {
  hash: hashApi(),
  apikey: process.env.REACT_APP_API_KEY
}