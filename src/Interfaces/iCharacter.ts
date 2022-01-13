import { iSimpleReturnApi } from ".";

export interface iThumbnail {
  path: string;
  extension: string;
}

export interface iUrl {
  type: string;
  url: string;
}

export interface iCharacter {
  comics: iSimpleReturnApi;
  description: string;
  events: iSimpleReturnApi;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: iSimpleReturnApi;
  stories: iSimpleReturnApi;
  thumbnail: iThumbnail;
  urls: iUrl[];
}
