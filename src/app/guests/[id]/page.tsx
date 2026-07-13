"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { PageHeader } from "@/ui/components/PageHeader";
import { TextField } from "@/ui/components/TextField";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSave } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import { guests, getVisitsForGuest } from "@/src/lib/data";
import { GuestTag } from "@/src/lib/types";

const ALL_TAGS: GuestTag[] = ["VIP", "Regular", "New", "Loyalty", "Birthday"];

function getTagVariant(tag: GuestTag): "neutral" | undefined {
  if (tag === "Regular" || tag === "New") return "neutral";
  return undefined;
}

function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

export default function GuestProfilePage() {
  const params = useParams();
  const guest = useMemo(
    () => guests.find((g) => g.id === params.id),
    [params.id]
  );
  const visitHistory = useMemo(
    () => (guest ? getVisitsForGuest(guest.id) : []),
    [guest]
  );

  const [name, setName] = useState(guest?.name ?? "");
  const [email, setEmail] = useState(guest?.email ?? "");
  const [avatarUrl, setAvatarUrl] = useState(guest?.avatarUrl ?? "");
  const [visits, setVisits] = useState(guest?.visits ?? 0);
  const [totalSpend, setTotalSpend] = useState(guest?.totalSpend ?? 0);
  const [comps, setComps] = useState(guest?.comps ?? 0);
  const [tags, setTags] = useState<GuestTag[]>(guest?.tags ?? []);
  const [saved, setSaved] = useState(false);

  if (!guest) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-base-background">
        <span className="text-heading-2 font-heading-2 text-primary-text">
          Guest not found
        </span>
        <Link href="/guests">
          <Button>Back to guests</Button>
        </Link>
      </div>
    );
  }

  const availableTags = ALL_TAGS.filter((tag) => !tags.includes(tag));

  function handleRemoveTag(tag: GuestTag) {
    setTags((prev) => prev.filter((t) => t !== tag));
    setSaved(false);
  }

  function handleAddTag(tag: GuestTag) {
    setTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="flex h-full w-full flex-col items-start overflow-hidden bg-base-background">
      <PageHeader
        leftSlot={
          <div className="flex items-center gap-2">
            <Link href="/guests">
              <IconButton
                variant="tertiary"
                icon={<FeatherArrowLeft />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </Link>
          </div>
        }
        title="Guest details"
        rightSlot={
          <div className="flex items-center gap-2">
            {saved && <Badge variant="success">Saved</Badge>}
            <Button
              variant="primary"
              icon={<FeatherSave />}
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        }
      />
      <div className="flex w-full grow shrink-0 basis-0 items-start gap-6 px-6 py-6 overflow-auto mobile:flex-col mobile:flex-nowrap mobile:gap-6 mobile:px-4 mobile:py-4">
        {/* Main content */}
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch">
          {/* Profile header card */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-primary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full items-center gap-6 mobile:flex-col mobile:flex-nowrap mobile:items-start mobile:justify-start mobile:gap-6">
              <Avatar size="x-large" image={avatarUrl}>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-primary-text">
                  {name}
                </span>
                <span className="text-body font-body text-secondary-text">
                  {email}
                </span>
                <div className="flex items-center gap-2 pt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant={getTagVariant(tag)}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-primary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full items-center gap-6 rounded-lg bg-secondary-background px-6 py-4 mobile:flex-row mobile:flex-wrap mobile:gap-4">
              <div className="flex flex-col items-start">
                <span className="text-caption font-caption text-secondary-text">
                  Visits
                </span>
                <span className="text-heading-2 font-heading-2 text-primary-text">
                  {visits}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-caption font-caption text-secondary-text">
                  Total spend
                </span>
                <span className="text-heading-2 font-heading-2 text-primary-text">
                  {formatCurrency(totalSpend)}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-caption font-caption text-secondary-text">
                  Comps redeemed
                </span>
                <span className="text-heading-2 font-heading-2 text-primary-text">
                  {comps}
                </span>
              </div>
            </div>
          </div>

          {/* Visit history card */}
          <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-primary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-primary-text">
                Visit history
              </span>
              <Button
                variant="tertiary"
                size="small"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                View all
              </Button>
            </div>
            <div className="flex w-full flex-col items-start">
              {visitHistory.map((visit, index) => (
                <React.Fragment key={visit.id}>
                  <div className="flex w-full items-center gap-4 rounded-lg px-3 py-3 hover:bg-neutral-container mobile:flex-col mobile:items-start mobile:gap-2">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-body-bold font-body-bold text-primary-text">
                          {visit.restaurant.name}
                        </span>
                        {visit.isCurrent && (
                          <Badge variant="success">Current</Badge>
                        )}
                      </div>
                      <span className="text-caption font-caption text-secondary-text">
                        {visit.restaurant.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mobile:w-full">
                      <div className="flex items-center gap-1">
                        <FeatherCalendar className="text-caption font-caption text-secondary-text" />
                        <span className="text-caption font-caption text-secondary-text">
                          {visit.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FeatherUsers className="text-caption font-caption text-secondary-text" />
                        <span className="text-caption font-caption text-secondary-text">
                          Party of {visit.partySize}
                        </span>
                      </div>
                    </div>
                  </div>
                  {index < visitHistory.length - 1 && (
                    <div className="flex h-px w-full flex-none items-start bg-neutral-border" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex w-72 flex-none flex-col items-start gap-6 self-stretch mobile:h-auto mobile:w-full mobile:flex-none">
          {/* Tags card */}
          <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-primary-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-primary-text">
              Tags
            </span>
            <div className="flex w-full flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="group/tag flex items-center gap-1 rounded-full bg-neutral-container-emphasis pl-2 pr-1.5 py-1 hover:bg-neutral-200 transition-colors"
                >
                  <span className="whitespace-nowrap text-caption font-caption text-primary-text">
                    {tag}
                  </span>
                  <FeatherX className="text-[13px] leading-[13px] text-primary-text" />
                </button>
              ))}
              {availableTags.length > 0 && (
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full border border-dashed border-neutral-border bg-transparent px-2 py-1 hover:bg-neutral-100 transition-colors"
                    >
                      <FeatherPlus className="text-[13px] leading-[13px] text-secondary-text" />
                      <span className="whitespace-nowrap text-caption font-caption text-secondary-text">
                        Add tag
                      </span>
                    </button>
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="start"
                      sideOffset={4}
                      asChild={true}
                    >
                      <DropdownMenu>
                        {availableTags.map((tag) => (
                          <DropdownMenu.DropdownItem
                            key={tag}
                            icon={<FeatherPlus />}
                            onSelect={() => handleAddTag(tag)}
                          >
                            {tag}
                          </DropdownMenu.DropdownItem>
                        ))}
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              )}
            </div>
          </div>

          {/* Edit details card */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-primary-background px-6 py-6">
            <span className="text-heading-3 font-heading-3 text-primary-text">
              Edit details
            </span>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Name
                </span>
                <TextField className="h-8 w-full flex-none">
                  <TextField.Input
                    placeholder="Guest name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                      setSaved(false);
                    }}
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Email
                </span>
                <TextField className="h-8 w-full flex-none">
                  <TextField.Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                      setSaved(false);
                    }}
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Avatar URL
                </span>
                <TextField className="h-8 w-full flex-none">
                  <TextField.Input
                    placeholder="https://..."
                    value={avatarUrl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setAvatarUrl(e.target.value);
                      setSaved(false);
                    }}
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Visits
                </span>
                <TextField className="h-8 w-full flex-none">
                  <TextField.Input
                    type="number"
                    value={String(visits)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setVisits(Number(e.target.value) || 0);
                      setSaved(false);
                    }}
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Total spend ($)
                </span>
                <TextField className="h-8 w-full flex-none">
                  <TextField.Input
                    type="number"
                    value={String(totalSpend)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setTotalSpend(Number(e.target.value) || 0);
                      setSaved(false);
                    }}
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Comps
                </span>
                <TextField className="h-8 w-full flex-none">
                  <TextField.Input
                    type="number"
                    value={String(comps)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setComps(Number(e.target.value) || 0);
                      setSaved(false);
                    }}
                  />
                </TextField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
