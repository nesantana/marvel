import { iSimpleReturnApi, iThumbnail, iUrl } from ".";

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
