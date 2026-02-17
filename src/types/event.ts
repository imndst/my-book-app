export interface Event {
  id: number;
  name: string;
  location: string;
  rw: string | null;
  jumplinkDiff: string;
}
export interface EventsResponse {
  status: boolean;
  message: string;
  result: Event[];
}