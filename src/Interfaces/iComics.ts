import { iDate, iItems, iPrice, iSimpleReturnApi, iThumbnail, iUrl } from ".";

export interface iComic {
  characters: iSimpleReturnApi;
  collectedIssues: [];
  collections: [];
  creators: iSimpleReturnApi;
  dates: iDate[];
  description: string;
  diamondCode: string;
  digitalId: number;
  ean: string;
  events: iSimpleReturnApi;
  format: string;
  id: number;
  images: any[];
  isbn: string;
  issn: string;
  issueNumber: number;
  modified: string;
  pageCount: number;
  prices: iPrice[];
  resourceURI: string;
  series: iItems;
  stories: iSimpleReturnApi;
  textObjects: any[];
  thumbnail: iThumbnail;
  title: string;
  upc: string;
  urls: iUrl[];
  variantDescription: string;
  variants: iSimpleReturnApi;
}
