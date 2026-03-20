import { Guest } from "./types";

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
