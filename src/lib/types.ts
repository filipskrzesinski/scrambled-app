export type GuestTag = "VIP" | "Regular" | "New" | "Loyalty" | "Birthday";

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  visits: number;
  totalSpend: number;
  comps: number;
  tags: GuestTag[];
}

export interface Diner {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
  partySize: number;
  diningTime: string;
  type: string;
  location: string;
  extraBadges?: string[];
  isOvertime?: boolean;
  isFirstVisit?: boolean;
}

export interface FloorSection {
  id: string;
  name: string;
  guestCount: number;
  diners: Diner[];
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
}

export interface Visit {
  id: string;
  guestId: string;
  restaurantId: string;
  date: string;
  partySize: number;
  isCurrent?: boolean;
}
