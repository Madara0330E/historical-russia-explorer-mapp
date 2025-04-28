
export type EventCategory = "battle" | "political" | "cultural";

export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  description: string;
  category: EventCategory;
  location: {
    lat: number;
    lon: number;
  };
  images: string[];
  videos?: string[];
}

export interface Ruler {
  id: string;
  name: string;
  title: string;
  startYear: number;
  endYear: number;
  image?: string;
}

export interface Comment {
  id: string;
  eventId: string;
  author: string;
  text: string;
  date: string;
}
