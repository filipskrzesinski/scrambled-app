"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/ui/components/Badge";
import { IconButton } from "@/ui/components/IconButton";
import { PageHeader } from "@/ui/components/PageHeader";
import { FeatherArrowLeft } from "@subframe/core";
import { DinerCard } from "@/src/components/DinerCard";
import { realtimeStats, floorSections } from "@/src/lib/data";

export default function RealtimePage() {
  return (
    <div className="flex h-full w-full flex-col items-start overflow-hidden bg-base-background">
      <PageHeader
        leftSlot={
          <div className="flex items-center gap-2">
            <Link href="/">
              <IconButton
                variant="tertiary"
                icon={<FeatherArrowLeft />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </Link>
          </div>
        }
        title="Realtime view"
        rightSlot={
          <div className="flex items-center gap-2">
            <Badge variant="success">Live</Badge>
          </div>
        }
      />
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-6 py-6 overflow-auto mobile:px-4 mobile:py-4">
        <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-secondary-background px-6 py-6 mobile:px-4 mobile:py-4">
          <div className="flex w-full flex-wrap items-center gap-6 mobile:flex-row mobile:flex-wrap mobile:gap-4">
            <div className="flex flex-col items-start">
              <span className="text-heading-2 font-heading-2 text-primary-text">
                {realtimeStats.currentGuests}
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Current guests
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-heading-2 font-heading-2 text-primary-text">
                {realtimeStats.avgDiningTime}
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Avg dining time
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-heading-2 font-heading-2 text-primary-text">
                {realtimeStats.tableTurnover}
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Table turnover
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-heading-2 font-heading-2 text-primary-text">
                {realtimeStats.expectedIn15Min}
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Expected in 15 min
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start gap-6 overflow-x-auto mobile:flex-col mobile:flex-nowrap mobile:gap-4">
          {floorSections.map((section) => (
            <div
              key={section.id}
              className="flex w-80 flex-none flex-col items-start gap-4 rounded-2xl bg-primary-background px-6 py-6 mobile:h-auto mobile:w-full mobile:flex-none mobile:px-4 mobile:py-4"
            >
              <div className="flex w-full items-center gap-3">
                <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-primary-text">
                  {section.name}
                </span>
                <Badge variant="neutral">{section.guestCount} guests</Badge>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                {section.diners.map((diner) => (
                  <DinerCard key={diner.id} diner={diner} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
