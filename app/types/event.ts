export type EventStatus = "upcoming" | "live" | "completed";

export type Event = {
  id: string;
  gameId: string;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  location: string;
  participants: number;
  maxParticipants: number;
};
