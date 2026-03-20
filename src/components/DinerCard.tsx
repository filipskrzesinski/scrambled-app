"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherCheck } from "@subframe/core";
import { FeatherGift } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherMoreVertical } from "@subframe/core";
import { FeatherMoveRight } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { Diner } from "@/src/lib/types";

function getTimeBadgeVariant(
  diningTime: string
): "neutral" | undefined {
  const minutes = parseInt(diningTime);
  if (!isNaN(minutes) && minutes < 20) return "neutral";
  return undefined;
}

function getExtraBadgeVariant(
  badge: string
): "success" | "notice" | undefined {
  if (badge === "Comp") return "notice";
  if (badge === "VIP") return "notice";
  return undefined;
}

interface DinerCardProps {
  diner: Diner;
}

export function DinerCard({ diner }: DinerCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-start gap-3 rounded-lg bg-secondary-background px-4 py-4${
        diner.isOvertime
          ? " border border-solid border-notice-border"
          : ""
      }`}
    >
      <div className="flex w-full items-center gap-3">
        <Avatar size="medium" image={diner.avatarUrl || ""}>
          {diner.initials}
        </Avatar>
        <div className="flex grow shrink-0 basis-0 flex-col items-start">
          <span className="text-body-bold font-body-bold text-primary-text">
            {diner.name}
          </span>
          <span className="text-caption font-caption text-secondary-text">
            Party of {diner.partySize}
          </span>
        </div>
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <IconButton
              size="small"
              icon={<FeatherMoreVertical />}
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
                <DropdownMenu.DropdownItem icon={<FeatherMoveRight />}>
                  Move table
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem icon={<FeatherGift />}>
                  Offer comp
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem icon={<FeatherCheck />}>
                  Close check
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      </div>
      <div className="flex w-full items-center gap-2">
        <Badge variant={getTimeBadgeVariant(diner.diningTime)}>
          {diner.diningTime}
        </Badge>
        <Badge variant="reservation">
          {diner.type}
        </Badge>
        {diner.extraBadges?.map((badge) => (
          <Badge key={badge} variant={getExtraBadgeVariant(badge)}>
            {badge}
          </Badge>
        ))}
      </div>
      <div className="flex w-full items-center gap-2 border-t border-solid border-neutral-border pt-2">
        <FeatherMapPin className="text-body font-body text-secondary-text" />
        <span className="text-caption font-caption text-secondary-text">
          {diner.location}
        </span>
      </div>
    </div>
  );
}
