"use client";

import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Checkbox } from "@/ui/components/Checkbox";
import { CheckboxGroup } from "@/ui/components/CheckboxGroup";
import { IconButton } from "@/ui/components/IconButton";
import { PageHeader } from "@/ui/components/PageHeader";
import { TextField } from "@/ui/components/TextField";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherSave } from "@subframe/core";
import { guests } from "@/src/lib/data";
import { Guest, GuestTag } from "@/src/lib/types";

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
  const router = useRouter();
  const guest = useMemo(
    () => guests.find((g) => g.id === params.id),
    [params.id]
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

  function handleTagToggle(tag: GuestTag, checked: boolean) {
    setTags((prev) =>
      checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
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
      <div className="flex w-full grow shrink-0 basis-0 items-start gap-6 px-6 py-6 overflow-auto mobile:flex-col mobile:px-4 mobile:py-4">
        {/* Main content */}
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 self-stretch rounded-2xl bg-primary-background px-6 py-6">
          {/* Profile header */}
          <div className="flex w-full items-center gap-6">
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

          {/* Stats */}
          <div className="flex w-full items-center gap-6 rounded-lg bg-secondary-background px-6 py-4">
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

          {/* Edit form */}
          <div className="flex w-full flex-col items-start gap-6">
            <span className="text-heading-3 font-heading-3 text-primary-text">
              Edit details
            </span>
            <div className="flex w-full max-w-[480px] flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-caption-bold font-caption-bold text-primary-text">
                  Name
                </span>
                <TextField className="w-full">
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
                <TextField className="w-full">
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
                <TextField className="w-full">
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
              <div className="flex w-full items-start gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-caption-bold font-caption-bold text-primary-text">
                    Visits
                  </span>
                  <TextField className="w-full">
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
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-caption-bold font-caption-bold text-primary-text">
                    Total spend ($)
                  </span>
                  <TextField className="w-full">
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
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-caption-bold font-caption-bold text-primary-text">
                    Comps
                  </span>
                  <TextField className="w-full">
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

        {/* Sidebar */}
        <div className="flex w-72 flex-none flex-col items-start gap-6 self-stretch rounded-2xl bg-secondary-background px-6 py-6 mobile:w-full">
          <div className="flex w-full flex-col items-start gap-4">
            <span className="text-heading-3 font-heading-3 text-primary-text">
              Tags
            </span>
            <CheckboxGroup>
              {ALL_TAGS.map((tag) => (
                <Checkbox
                  key={tag}
                  label={tag}
                  checked={tags.includes(tag)}
                  onCheckedChange={(checked: boolean) =>
                    handleTagToggle(tag, checked)
                  }
                />
              ))}
            </CheckboxGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
