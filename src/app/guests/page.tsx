"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { PageHeader } from "@/ui/components/PageHeader";
import { TextField } from "@/ui/components/TextField";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherColumns } from "@subframe/core";
import { FeatherFilter } from "@subframe/core";
import { FeatherLayoutGrid } from "@subframe/core";
import { FeatherList } from "@subframe/core";
import { GuestCard } from "@/src/components/GuestCard";
import { guests } from "@/src/lib/data";

export default function GuestsPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("fb32577c");

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(search.toLowerCase()) ||
      guest.email.toLowerCase().includes(search.toLowerCase())
  );

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
        title="Guests"
        rightSlot={
          <div className="flex items-center gap-2">
            <Badge variant="success">{filteredGuests.length} total</Badge>
            <Button
              variant="primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              New
            </Button>
          </div>
        }
      />
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-6 py-6 overflow-auto mobile:px-4 mobile:py-4">
        <div className="flex w-full items-center gap-3 mobile:flex-col mobile:flex-nowrap mobile:items-start mobile:justify-start mobile:gap-3 mobile:px-4 mobile:py-3">
          <TextField className="h-8 w-80 flex-none mobile:w-full">
            <TextField.Input
              placeholder="Search guests..."
              value={search}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(event.target.value)
              }
            />
          </TextField>
          <Button
            size="small"
            icon={<FeatherFilter />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Filters
          </Button>
          <ToggleGroup value={view} onValueChange={(value: string) => setView(value)}>
            <ToggleGroup.Item icon={<FeatherLayoutGrid />} value="fb32577c">
              Gallery
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={<FeatherList />} value="f4251628">
              List
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={<FeatherColumns />} value="c2361485">
              Kanban
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-1">
          {filteredGuests.map((guest) => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
        </div>
      </div>
    </div>
  );
}
