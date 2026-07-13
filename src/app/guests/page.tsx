"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { PageHeader } from "@/ui/components/PageHeader";
import { TextField } from "@/ui/components/TextField";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherLayoutGrid } from "@subframe/core";
import { FeatherList } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { GuestCard } from "@/src/components/GuestCard";
import { GuestListRow } from "@/src/components/GuestListRow";
import { GuestStatsBar } from "@/src/components/GuestStatsBar";
import { guests } from "@/src/lib/data";
import { GuestTag } from "@/src/lib/types";

const SEGMENTS: { id: string; label: string; tag?: GuestTag }[] = [
  { id: "all", label: "All" },
  { id: "vip", label: "VIP", tag: "VIP" },
  { id: "regular", label: "Regular", tag: "Regular" },
  { id: "new", label: "New", tag: "New" },
  { id: "loyalty", label: "Loyalty", tag: "Loyalty" },
];

export default function GuestsPage() {
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState("all");
  const [view, setView] = useState("gallery");

  const segmentGuests = useMemo(() => {
    const seg = SEGMENTS.find((s) => s.id === segment);
    if (!seg?.tag) return guests;
    return guests.filter((guest) => guest.tags.includes(seg.tag!));
  }, [segment]);

  const filteredGuests = useMemo(() => {
    const query = search.toLowerCase();
    return segmentGuests.filter(
      (guest) =>
        guest.name.toLowerCase().includes(query) ||
        guest.email.toLowerCase().includes(query)
    );
  }, [segmentGuests, search]);

  return (
    <div className="flex h-full w-full flex-col items-start overflow-hidden bg-base-background">
      <PageHeader
        leftSlot={
          <Link href="/">
            <IconButton
              variant="tertiary"
              icon={<FeatherArrowLeft />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </Link>
        }
        title="Guests"
        rightSlot={
          <Button
            variant="primary"
            icon={<FeatherPlus />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            New guest
          </Button>
        }
      />
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-6 py-6 overflow-auto mobile:px-4 mobile:py-4">
        <GuestStatsBar guests={guests} />
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-wrap items-center gap-2 mobile:flex-col mobile:flex-nowrap mobile:items-start mobile:gap-3">
            {SEGMENTS.map((seg) => (
              <Badge
                key={seg.id}
                variant="neutral"
                onClick={() => setSegment(seg.id)}
                className={
                  segment === seg.id
                    ? "cursor-pointer outline outline-1 -outline-offset-1 outline-neutral-border-emphasis"
                    : "cursor-pointer bg-neutral-container hover:bg-neutral-container-emphasis"
                }
              >
                {seg.label}
              </Badge>
            ))}
          </div>
          <div className="flex w-full items-center justify-between gap-3 mobile:flex-col mobile:flex-nowrap mobile:items-start">
            <div className="flex items-center gap-3 mobile:w-full">
              <TextField className="h-8 w-80 flex-none mobile:w-full">
                <TextField.IconSlot icon={<FeatherSearch />} />
                <TextField.Input
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(event.target.value)
                  }
                />
              </TextField>
            </div>
            <div className="flex items-center gap-2 mobile:w-full mobile:justify-between">
              <Badge variant="neutral">{filteredGuests.length} guests</Badge>
              <ToggleGroup
                value={view}
                onValueChange={(value: string) => value && setView(value)}
              >
                <ToggleGroup.Item icon={<FeatherLayoutGrid />} value="gallery" />
                <ToggleGroup.Item icon={<FeatherList />} value="list" />
              </ToggleGroup>
            </div>
          </div>
        </div>
        {filteredGuests.length === 0 ? (
          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-border px-6 py-16">
            <span className="text-heading-3 font-heading-3 text-primary-text">
              No guests found
            </span>
            <span className="text-body font-body text-secondary-text">
              Try a different search or segment.
            </span>
          </div>
        ) : view === "gallery" ? (
          <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid-cols-1">
            {filteredGuests.map((guest) => (
              <GuestCard key={guest.id} guest={guest} />
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-col items-start rounded-2xl border border-solid border-neutral-border bg-primary-background px-2 py-2">
            {filteredGuests.map((guest, index) => (
              <React.Fragment key={guest.id}>
                <GuestListRow guest={guest} />
                {index < filteredGuests.length - 1 && (
                  <div className="flex h-px w-full flex-none items-start bg-neutral-border" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
