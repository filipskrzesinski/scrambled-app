"use client";

import React from "react";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherCrown } from "@subframe/core";
import { FeatherDollarSign } from "@subframe/core";
import { FeatherRepeat } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import { Guest } from "@/src/lib/types";

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper: string;
}

function Stat({ icon, label, value, helper }: StatProps) {
  return (
    <div className="flex grow shrink-0 basis-0 items-center gap-4 rounded-2xl bg-secondary-background px-5 py-4">
      <IconWithBackground size="large" icon={icon} />
      <div className="flex flex-col items-start gap-0.5">
        <span className="text-caption font-caption text-secondary-text">
          {label}
        </span>
        <span className="text-heading-2 font-heading-2 text-primary-text">
          {value}
        </span>
        <span className="text-caption font-caption text-subtext-color">
          {helper}
        </span>
      </div>
    </div>
  );
}

interface GuestStatsBarProps {
  guests: Guest[];
}

export function GuestStatsBar({ guests }: GuestStatsBarProps) {
  const total = guests.length;
  const vipCount = guests.filter((g) => g.tags.includes("VIP")).length;
  const totalVisits = guests.reduce((sum, g) => sum + g.visits, 0);
  const totalSpend = guests.reduce((sum, g) => sum + g.totalSpend, 0);
  const avgSpend = total ? Math.round(totalSpend / total) : 0;

  return (
    <div className="flex w-full items-stretch gap-4 mobile:flex-col mobile:flex-nowrap">
      <Stat
        icon={<FeatherUsers />}
        label="Total guests"
        value={total.toLocaleString()}
        helper="In your book"
      />
      <Stat
        icon={<FeatherCrown />}
        label="VIPs"
        value={vipCount.toLocaleString()}
        helper={`${total ? Math.round((vipCount / total) * 100) : 0}% of guests`}
      />
      <Stat
        icon={<FeatherDollarSign />}
        label="Avg. lifetime spend"
        value={`$${avgSpend.toLocaleString()}`}
        helper={`$${totalSpend.toLocaleString()} total`}
      />
      <Stat
        icon={<FeatherRepeat />}
        label="Total visits"
        value={totalVisits.toLocaleString()}
        helper={`${total ? (totalVisits / total).toFixed(1) : 0} avg per guest`}
      />
    </div>
  );
}
