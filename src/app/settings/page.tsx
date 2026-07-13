"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { PageHeader } from "@/ui/components/PageHeader";
import { Select } from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherTrash2 } from "@subframe/core";
import { FeatherUpload } from "@subframe/core";
import {
  RESTAURANT_NAME,
  RESTAURANT_ADDRESS,
  RESTAURANT_IMAGE_URL,
} from "@/src/lib/data";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

type DayHours = { open: string; close: string; enabled: boolean };

const DEFAULT_HOURS: Record<string, DayHours> = {
  Monday: { open: "5:00 PM", close: "11:00 PM", enabled: true },
  Tuesday: { open: "5:00 PM", close: "11:00 PM", enabled: true },
  Wednesday: { open: "5:00 PM", close: "11:00 PM", enabled: true },
  Thursday: { open: "5:00 PM", close: "12:00 AM", enabled: true },
  Friday: { open: "5:00 PM", close: "1:00 AM", enabled: true },
  Saturday: { open: "11:00 AM", close: "1:00 AM", enabled: true },
  Sunday: { open: "", close: "", enabled: false },
};

const NOTIFICATION_ITEMS = [
  {
    id: "reservations",
    label: "New reservations",
    description: "Get notified the moment a booking comes in.",
    default: true,
  },
  {
    id: "reviews",
    label: "Guest reviews",
    description: "Know when a guest leaves feedback after dining.",
    default: true,
  },
  {
    id: "summary",
    label: "Daily summary email",
    description: "A recap of covers, revenue, and no-shows each night.",
    default: false,
  },
  {
    id: "inventory",
    label: "Low inventory alerts",
    description: "Warn me when key ingredients run low.",
    default: true,
  },
] as const;

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-body-bold font-body-bold text-primary-text">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="flex h-px w-full flex-none items-start bg-neutral-border" />;
}

export default function SettingsPage() {
  const [name, setName] = useState(RESTAURANT_NAME);
  const [address, setAddress] = useState(RESTAURANT_ADDRESS);
  const [phone, setPhone] = useState("(415) 555-0199");
  const [description, setDescription] = useState(
    "Levantine cooking with a wood-fired hearth, natural wine, and a warm neighborhood room in Tribeca."
  );
  const [hours, setHours] = useState<Record<string, DayHours>>(DEFAULT_HOURS);
  const [notifications, setNotifications] = useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATION_ITEMS.map((n) => [n.id, n.default]))
  );
  const [ownerName, setOwnerName] = useState("Rima Haidar");
  const [email, setEmail] = useState("rima@beitrima.com");
  const [timezone, setTimezone] = useState("et");

  const updateDay = (day: string, patch: Partial<DayHours>) =>
    setHours((prev) => ({ ...prev, [day]: { ...prev[day], ...patch } }));

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
        title="Settings"
        rightSlot={
          <Button
            variant="primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save changes
          </Button>
        }
      />
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center gap-6 px-6 py-6 overflow-auto mobile:px-4 mobile:py-4">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-6">
          {/* Restaurant profile */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-secondary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-primary-text">
                Restaurant profile
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Update your restaurant&#39;s public information and branding.
              </span>
            </div>
            <div className="flex w-full items-center gap-4 mobile:flex-col mobile:items-start">
              <img
                className="h-20 w-32 flex-none rounded-lg object-cover"
                src={RESTAURANT_IMAGE_URL}
                alt={name}
              />
              <Button
                variant="secondary"
                icon={<FeatherUpload />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Change cover
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Restaurant name</FieldLabel>
                <TextField className="h-9 w-full flex-none">
                  <TextField.Input
                    placeholder="Beit Rima"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setName(event.target.value)
                    }
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Address</FieldLabel>
                <TextField className="h-9 w-full flex-none">
                  <TextField.Input
                    placeholder="138 Church St."
                    value={address}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setAddress(event.target.value)
                    }
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Phone</FieldLabel>
                <TextField className="h-9 w-full flex-none">
                  <TextField.Input
                    placeholder="(415) 555-0199"
                    value={phone}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setPhone(event.target.value)
                    }
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Short description</FieldLabel>
                <TextArea className="w-full">
                  <TextArea.Input
                    placeholder="Tell guests about your restaurant..."
                    value={description}
                    onChange={(
                      event: React.ChangeEvent<HTMLTextAreaElement>
                    ) => setDescription(event.target.value)}
                  />
                </TextArea>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-secondary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-primary-text">
                Hours
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Set your opening and closing times for each day.
              </span>
            </div>
            <div className="flex w-full flex-col items-start">
              {DAYS.map((day, index) => {
                const value = hours[day];
                return (
                  <React.Fragment key={day}>
                    {index > 0 && <Divider />}
                    <div className="flex w-full items-center gap-4 py-3 mobile:flex-col mobile:items-start">
                      <span className="w-28 flex-none text-body-bold font-body-bold text-primary-text">
                        {day}
                      </span>
                      <div className="flex grow shrink-0 basis-0 items-center gap-3 mobile:w-full">
                        <TextField
                          className="h-9 grow shrink-0 basis-0"
                          disabled={!value.enabled}
                        >
                          <TextField.Input
                            placeholder="Open"
                            value={value.enabled ? value.open : "Closed"}
                            disabled={!value.enabled}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => updateDay(day, { open: event.target.value })}
                          />
                        </TextField>
                        <span className="text-body font-body text-subtext-color">
                          to
                        </span>
                        <TextField
                          className="h-9 grow shrink-0 basis-0"
                          disabled={!value.enabled}
                        >
                          <TextField.Input
                            placeholder="Close"
                            value={value.enabled ? value.close : "Closed"}
                            disabled={!value.enabled}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => updateDay(day, { close: event.target.value })}
                          />
                        </TextField>
                        <Switch
                          checked={value.enabled}
                          onCheckedChange={(checked: boolean) =>
                            updateDay(day, { enabled: checked })
                          }
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Notifications */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-secondary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-primary-text">
                Notifications
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Choose which alerts you want to receive.
              </span>
            </div>
            <div className="flex w-full flex-col items-start">
              {NOTIFICATION_ITEMS.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && <Divider />}
                  <div className="flex w-full items-center gap-4 py-3">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                      <span className="text-body-bold font-body-bold text-primary-text">
                        {item.label}
                      </span>
                      <span className="text-caption font-caption text-secondary-text">
                        {item.description}
                      </span>
                    </div>
                    <Switch
                      checked={notifications[item.id]}
                      onCheckedChange={(checked: boolean) =>
                        setNotifications((prev) => ({
                          ...prev,
                          [item.id]: checked,
                        }))
                      }
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Account */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-secondary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-primary-text">
                Account
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Manage the owner details for this restaurant.
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Owner name</FieldLabel>
                <TextField className="h-9 w-full flex-none">
                  <TextField.Input
                    placeholder="Owner name"
                    value={ownerName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setOwnerName(event.target.value)
                    }
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Email</FieldLabel>
                <TextField className="h-9 w-full flex-none">
                  <TextField.Input
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(event.target.value)
                    }
                  />
                </TextField>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <FieldLabel>Timezone</FieldLabel>
                <Select
                  className="h-9 w-full flex-none"
                  value={timezone}
                  onValueChange={(value: string) => setTimezone(value)}
                >
                  <Select.Item value="pt">Pacific Time (PT)</Select.Item>
                  <Select.Item value="mt">Mountain Time (MT)</Select.Item>
                  <Select.Item value="ct">Central Time (CT)</Select.Item>
                  <Select.Item value="et">Eastern Time (ET)</Select.Item>
                </Select>
              </div>
            </div>
          </div>

          {/* Danger zone */}
          <div className="flex w-full flex-col items-start gap-6 rounded-2xl border border-solid border-error-border bg-secondary-background px-6 py-6 mobile:px-4 mobile:py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-error-700">
                Danger zone
              </span>
              <span className="text-caption font-caption text-secondary-text">
                Irreversible actions that affect your entire restaurant.
              </span>
            </div>
            <div className="flex w-full items-center gap-4 mobile:flex-col mobile:items-start">
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-0.5">
                <span className="text-body-bold font-body-bold text-primary-text">
                  Delete restaurant
                </span>
                <span className="text-caption font-caption text-secondary-text">
                  Permanently remove {name} and all its data. This cannot be
                  undone.
                </span>
              </div>
              <Button
                variant="primary-destructive"
                icon={<FeatherTrash2 />}
                className="mobile:w-full"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
