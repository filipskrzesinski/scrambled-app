import Link from "next/link";
import * as SubframeCore from "@subframe/core";
import {
  FeatherAward,
  FeatherChevronRight,
  FeatherCog,
  FeatherPercent,
  FeatherUsers,
  FeatherUtensils,
} from "@subframe/core";
import { HeroBanner } from "@/src/components/HeroBanner";
import { SCRAMBLED_LOGO_URL } from "@/src/lib/data";

const NAV_ITEMS = [
  {
    href: "/realtime",
    icon: <FeatherUtensils />,
    label: "Realtime",
    description: "Live floor & tables",
  },
  {
    href: "/guests",
    icon: <FeatherUsers />,
    label: "Guests",
    description: "Guest book & profiles",
  },
  {
    href: "/loyalty",
    icon: <FeatherAward />,
    label: "Loyalty",
    description: "Points, tiers & rewards",
  },
  {
    href: "/promos",
    icon: <FeatherPercent />,
    label: "Promos",
    description: "Create & manage promotions",
  },
  {
    href: "/settings",
    icon: <FeatherCog />,
    label: "Settings",
    description: "Restaurant & account",
  },
];

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-base-background">
      <img
        className="h-16 flex-none object-cover absolute top-8"
        src={SCRAMBLED_LOGO_URL}
        alt="Scrambled"
      />
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center gap-12 px-6 pt-40 pb-6">
        <HeroBanner />
        <div className="flex w-full max-w-[768px] flex-col items-start gap-2 rounded-3xl bg-transparent p-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="w-full no-underline">
              <div className="flex w-full items-center gap-4 rounded-xl bg-[#ffffff] px-4 py-4 hover:bg-secondary-background">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-neutral-container">
                  <SubframeCore.IconWrapper className="text-heading-3 font-heading-3 text-primary-text">
                    {item.icon}
                  </SubframeCore.IconWrapper>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                  <span className="w-full text-data-body font-data-body text-primary-text">
                    {item.label}
                  </span>
                  <span className="line-clamp-1 w-full text-support font-support text-secondary-text">
                    {item.description}
                  </span>
                </div>
                <FeatherChevronRight className="text-heading-3 font-heading-3 text-neutral-400" />
              </div>
            </Link>
          ))}
        </div>
        <span className="text-caption font-caption text-subtext-color">
          © {new Date().getFullYear()} Scrambled App
        </span>
      </div>
    </div>
  );
}
