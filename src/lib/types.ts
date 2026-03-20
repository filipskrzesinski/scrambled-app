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
