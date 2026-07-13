import { Guest, FloorSection, Restaurant, Visit } from "./types";

export const RESTAURANT_NAME = "Beit Rima";
export const RESTAURANT_ADDRESS = "138 Church St.";
export const RESTAURANT_IMAGE_URL =
  "https://beitrimasf.com/assets/images/articles/theinfatuation_beitrima.jpg";
export const SCRAMBLED_LOGO_URL =
  "https://res.cloudinary.com/dnkpdfdai/image/upload/v1774034388/uploads/1/lbrilywplavdgyb1zf2h.png";

export const guests: Guest[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@email.com",
    phone: "(415) 555-0142",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    visits: 24,
    totalSpend: 3420,
    comps: 2,
    tags: ["VIP", "Regular"],
  },
  {
    id: "2",
    name: "James Rodriguez",
    email: "james.r@company.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    visits: 12,
    totalSpend: 1890,
    comps: 1,
    tags: ["Regular"],
  },
  {
    id: "3",
    name: "Emily Chen",
    email: "emily.chen@mail.com",
    phone: "(628) 555-0193",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    visits: 45,
    totalSpend: 6780,
    comps: 5,
    tags: ["VIP", "Loyalty"],
  },
  {
    id: "4",
    name: "Michael Thompson",
    email: "m.thompson@work.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    visits: 8,
    totalSpend: 920,
    comps: 0,
    tags: ["New"],
  },
  {
    id: "5",
    name: "Jessica Williams",
    email: "jess.w@personal.com",
    phone: "(415) 555-0274",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    visits: 32,
    totalSpend: 4560,
    comps: 3,
    tags: ["VIP", "Birthday"],
  },
  {
    id: "6",
    name: "David Park",
    email: "david.park@email.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    visits: 18,
    totalSpend: 2340,
    comps: 1,
    tags: ["Regular"],
  },
  {
    id: "7",
    name: "Amanda Foster",
    email: "amanda.f@inbox.com",
    phone: "(510) 555-0388",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    visits: 56,
    totalSpend: 8920,
    comps: 7,
    tags: ["VIP", "Loyalty"],
  },
  {
    id: "8",
    name: "Robert Kim",
    email: "r.kim@business.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    visits: 3,
    totalSpend: 420,
    comps: 0,
    tags: ["New"],
  },
];

export const realtimeStats = {
  currentGuests: 32,
  avgDiningTime: "47 min",
  tableTurnover: "2.4x",
  expectedIn15Min: 6,
};

export const floorSections: FloorSection[] = [
  {
    id: "bar",
    name: "Bar",
    guestCount: 8,
    diners: [
      {
        id: "d1",
        name: "Michael Johnson",
        initials: "MJ",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        partySize: 2,
        diningTime: "32 min",
        type: "Walk-in",
        location: "Bar Seat 3-4",
      },
      {
        id: "d2",
        name: "Sarah Lee",
        initials: "SL",
        partySize: 1,
        diningTime: "18 min",
        type: "Walk-in",
        location: "Bar Seat 7",
        extraBadges: ["VIP"],
        isFirstVisit: true,
      },
    ],
  },
  {
    id: "patio",
    name: "Patio",
    guestCount: 12,
    diners: [
      {
        id: "d3",
        name: "Emily Chen",
        initials: "EC",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        partySize: 4,
        diningTime: "55 min",
        type: "7:00 PM",
        location: "Patio Table 2",
      },
      {
        id: "d4",
        name: "David Wilson",
        initials: "DW",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        partySize: 2,
        diningTime: "1h 25m",
        type: "Walk-in",
        location: "Patio Table 5",
        isOvertime: true,
      },
      {
        id: "d5",
        name: "Rachel Brown",
        initials: "RB",
        partySize: 6,
        diningTime: "12 min",
        type: "7:30 PM",
        location: "Patio Table 8",
      },
    ],
  },
  {
    id: "main-dining",
    name: "Main Dining",
    guestCount: 12,
    diners: [
      {
        id: "d6",
        name: "James Thompson",
        initials: "JT",
        avatarUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        partySize: 2,
        diningTime: "42 min",
        type: "6:30 PM",
        location: "Table 12",
        extraBadges: ["Comp"],
      },
      {
        id: "d7",
        name: "Amanda Miller",
        initials: "AM",
        avatarUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        partySize: 4,
        diningTime: "8 min",
        type: "7:15 PM",
        location: "Table 3",
        extraBadges: ["VIP"],
      },
      {
        id: "d8",
        name: "Kevin Park",
        initials: "KP",
        partySize: 2,
        diningTime: "38 min",
        type: "Walk-in",
        location: "Table 7",
        isFirstVisit: true,
      },
    ],
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Beit Rima",
    address: "138 Church St, San Francisco",
  },
  {
    id: "r2",
    name: "Reem's California",
    address: "2901 Fruitvale Ave, Oakland",
  },
  {
    id: "r3",
    name: "Dyafa",
    address: "44 Webster St, Oakland",
  },
];

export const visits: Visit[] = [
  // Sarah Mitchell
  { id: "v1", guestId: "1", restaurantId: "r1", date: "Mar 20, 2026", partySize: 4, isCurrent: true },
  { id: "v2", guestId: "1", restaurantId: "r1", date: "Feb 14, 2026", partySize: 2 },
  { id: "v3", guestId: "1", restaurantId: "r2", date: "Jan 8, 2026", partySize: 6 },
  { id: "v4", guestId: "1", restaurantId: "r1", date: "Dec 24, 2025", partySize: 8 },
  { id: "v5", guestId: "1", restaurantId: "r3", date: "Nov 15, 2025", partySize: 3 },
  // James Rodriguez
  { id: "v6", guestId: "2", restaurantId: "r1", date: "Mar 18, 2026", partySize: 2 },
  { id: "v7", guestId: "2", restaurantId: "r1", date: "Jan 22, 2026", partySize: 4 },
  // Emily Chen
  { id: "v8", guestId: "3", restaurantId: "r1", date: "Mar 19, 2026", partySize: 2 },
  { id: "v9", guestId: "3", restaurantId: "r2", date: "Feb 28, 2026", partySize: 4 },
  { id: "v10", guestId: "3", restaurantId: "r3", date: "Feb 10, 2026", partySize: 2 },
  // Michael Thompson - first time at Beit Rima
  { id: "v11", guestId: "4", restaurantId: "r2", date: "Mar 1, 2026", partySize: 2 },
  // Jessica Williams
  { id: "v12", guestId: "5", restaurantId: "r1", date: "Mar 15, 2026", partySize: 3 },
  { id: "v13", guestId: "5", restaurantId: "r1", date: "Feb 20, 2026", partySize: 2 },
  // David Park
  { id: "v14", guestId: "6", restaurantId: "r1", date: "Mar 10, 2026", partySize: 2 },
  { id: "v15", guestId: "6", restaurantId: "r2", date: "Jan 5, 2026", partySize: 4 },
  // Amanda Foster
  { id: "v16", guestId: "7", restaurantId: "r1", date: "Mar 17, 2026", partySize: 2 },
  { id: "v17", guestId: "7", restaurantId: "r3", date: "Mar 2, 2026", partySize: 6 },
  { id: "v18", guestId: "7", restaurantId: "r2", date: "Feb 12, 2026", partySize: 4 },
  // Robert Kim - no visits to Beit Rima (first timer)
  { id: "v19", guestId: "8", restaurantId: "r3", date: "Feb 5, 2026", partySize: 2 },
];

export function getVisitsForGuest(guestId: string): (Visit & { restaurant: Restaurant })[] {
  return visits
    .filter((v) => v.guestId === guestId)
    .map((v) => ({
      ...v,
      restaurant: restaurants.find((r) => r.id === v.restaurantId)!,
    }));
}

export function isFirstVisitAtRestaurant(guestId: string, restaurantId: string): boolean {
  return !visits.some((v) => v.guestId === guestId && v.restaurantId === restaurantId);
}
