export interface YTImage {
  url: string;
  width: number;
  height: number;
}
export interface YTImages {
  default: YTImage;
  medium: YTImage;
  high: YTImage;
  standard: YTImage;
  maxres: YTImage;
}

export interface YTLocalized {
  title: string;
  description: string;
}
