import Link from "next/link";
import { HomeCard } from "@/ui/components/HomeCard";
import { FeatherAward } from "@subframe/core";
import { FeatherCog } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import { FeatherUtensils } from "@subframe/core";
import { CurrentDateTime } from "@/src/components/CurrentDateTime";
import {
  RESTAURANT_NAME,
  RESTAURANT_ADDRESS,
  RESTAURANT_IMAGE_URL,
  SCRAMBLED_LOGO_URL,
} from "@/src/lib/data";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-base-background">
      <img
        className="h-16 flex-none object-cover absolute top-8"
        src={SCRAMBLED_LOGO_URL}
        alt="Scrambled"
      />
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center gap-12 px-6 pt-40 pb-6">
        <div className="flex h-80 w-full max-w-[768px] flex-none flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl relative">
          <div className="flex flex-col items-center justify-center gap-4 absolute z-10">
            <span className="text-editorial-h2 font-editorial-h2 text-white">
              {RESTAURANT_NAME}
            </span>
            <CurrentDateTime />
            <span className="text-data-body font-data-body text-white">
              {RESTAURANT_ADDRESS}
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2 overflow-hidden rounded-2xl bg-[#00000033] px-2 py-2 absolute inset-0 backdrop-blur-sm" />
          <img
            className="min-h-[0px] w-full grow shrink-0 basis-0 rounded-2xl object-cover"
            src={RESTAURANT_IMAGE_URL}
            alt={RESTAURANT_NAME}
          />
        </div>
        <div className="w-full max-w-[768px] flex-col items-start gap-6 grid grid-cols-2">
          <Link href="/realtime" className="no-underline">
            <HomeCard icon={<FeatherUtensils />} label="Realtime" />
          </Link>
          <Link href="/guests" className="no-underline">
            <HomeCard icon={<FeatherUsers />} label="Guests" />
          </Link>
          <Link href="/loyalty" className="no-underline">
            <HomeCard icon={<FeatherAward />} label="Loyalty" />
          </Link>
          <Link href="/settings" className="no-underline">
            <HomeCard icon={<FeatherCog />} label="Settings" />
          </Link>
        </div>
      </div>
    </div>
  );
}
