"use client";

import React from "react";
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

function getTagVariant(
  tag: GuestTag
): "neutral" | undefined {
  if (tag === "Regular" || tag === "New") return "neutral";
  return undefined;
}

function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

interface GuestCardProps {
  guest: Guest;
}

export function GuestCard({ guest }: GuestCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl bg-primary-background px-4 py-4 hover:bg-neutral-50">
      <div className="flex w-full items-start justify-between">
        <img
          className="h-16 w-16 flex-none rounded-full object-cover"
          src={guest.avatarUrl}
          alt={guest.name}
        />
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <IconButton
              size="small"
              icon={<FeatherMoreHorizontal />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
      <div className="flex w-full flex-col items-start gap-1">
        <span className="text-body-bold font-body-bold text-primary-text">
          {guest.name}
        </span>
        <span className="text-caption font-caption text-secondary-text">
          {guest.email}
        </span>
      </div>
      <div className="flex w-full items-center gap-4">
        <div className="flex flex-col items-start">
          <span className="text-caption font-caption text-secondary-text">
            Visits
          </span>
          <span className="text-body-bold font-body-bold text-primary-text">
            {guest.visits}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-caption font-caption text-secondary-text">
            Spend
          </span>
          <span className="text-body-bold font-body-bold text-primary-text">
            {formatCurrency(guest.totalSpend)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-caption font-caption text-secondary-text">
            Comps
          </span>
          <span className="text-body-bold font-body-bold text-primary-text">
            {guest.comps}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        {guest.tags.map((tag) => (
          <Badge key={tag} variant={getTagVariant(tag)}>
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
