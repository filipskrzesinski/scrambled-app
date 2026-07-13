"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/ui/components/Badge";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherCalendar } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherGift } from "@subframe/core";
import { FeatherMoreHorizontal } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { Guest, GuestTag } from "@/src/lib/types";

function getTagVariant(tag: GuestTag): "neutral" | undefined {
  if (tag === "Regular" || tag === "New") return "neutral";
  return undefined;
}

function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

interface GuestListRowProps {
  guest: Guest;
}

export function GuestListRow({ guest }: GuestListRowProps) {
  const router = useRouter();

  return (
    <div
      className="flex w-full items-center gap-6 rounded-lg px-4 py-5 hover:bg-neutral-container cursor-pointer mobile:flex-col mobile:items-start mobile:gap-4 mobile:px-3 mobile:py-4"
      onClick={() => router.push(`/guests/${guest.id}`)}
    >
      <img
        className="h-14 w-14 flex-none rounded-full object-cover"
        src={guest.avatarUrl}
        alt={guest.name}
      />
      <div className="flex w-48 flex-none flex-col items-start gap-0.5 mobile:w-full mobile:flex-none">
        <span className="text-editorial-subtitle-2 font-editorial-subtitle-2 text-primary-text">
          {guest.name}
        </span>
        <span className="text-caption font-caption text-secondary-text">
          {guest.email}
        </span>
      </div>
      <div className="flex grow shrink-0 basis-0 items-center gap-8 mobile:gap-6">
        <div className="flex flex-col items-start">
          <span className="text-caption font-caption text-secondary-text">
            Visits
          </span>
          <span className="text-data-h-4 font-data-h-4 text-primary-text">
            {guest.visits}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-caption font-caption text-secondary-text">
            Spend
          </span>
          <span className="text-data-h-4 font-data-h-4 text-primary-text">
            {formatCurrency(guest.totalSpend)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-caption font-caption text-secondary-text">
            Comps
          </span>
          <span className="text-data-h-4 font-data-h-4 text-primary-text">
            {guest.comps}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 mobile:w-full mobile:flex-none mobile:justify-between">
        <div className="flex items-center gap-2">
          {guest.tags.map((tag) => (
            <Badge key={tag} variant={getTagVariant(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <IconButton
              variant="tertiary"
              size="small"
              icon={<FeatherMoreHorizontal />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
              }}
            />
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="end"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu>
                <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                  View profile
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem icon={<FeatherCalendar />}>
                  New reservation
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem icon={<FeatherGift />}>
                  Offer comp
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownDivider />
                <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                  Edit
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      </div>
    </div>
  );
}
