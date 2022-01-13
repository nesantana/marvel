import { ReactNode } from "react";

export * from "./iAxios";

export interface iComponentSimple {
  children: ReactNode;
}

export interface iSimpleReturnApi {
  available: number;
  collectionURI: string;
  items: iItems[];
  returned: number;
}

export interface iItems {
  name: string;
  resourceURI: string;
}
