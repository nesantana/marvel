import { iSimpleReturnApi, iThumbnail } from ".";

export interface iEvent {
  characters: iSimpleReturnApi[];
  comics: iSimpleReturnApi[];
  creators: iSimpleReturnApi[];
  description: string;
  end: string;
  id: number;
  modified: string;
  next: iSimpleReturnApi[];
  previous: iSimpleReturnApi[];
  resourceURI: string;
  series: iSimpleReturnApi[];
  start: string;
  stories: iSimpleReturnApi[];
  thumbnail: iThumbnail;
  title: string;
}
