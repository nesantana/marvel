import { ReactNode } from "react";

export * from "./iAxios";
export * from "./iCharacter";
export * from "./iComics";
export * from "./iEvents";

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

export interface iThumbnail {
  path: string;
  extension: string;
}

export interface iUrl {
  type: string;
  url: string;
}

export interface iDate {
  date: string;
  type: string;
}

export interface iPrice {
  price: number;
  type: string;
}
