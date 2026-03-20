export type GuestTag = "VIP" | "Regular" | "New" | "Loyalty" | "Birthday";

export interface Guest {
  id: string;
  name: string;
  email: string;
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
}

export interface FloorSection {
  id: string;
  name: string;
  guestCount: number;
  diners: Diner[];
}
