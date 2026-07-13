"use client";

import React from "react";
import { FeatherX } from "@subframe/core";
import * as SubframeUtils from "../utils";

interface BadgeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "neutral" | "beta" | "success" | "error" | "notice" | "reservation";
  children?: React.ReactNode;
  removable?: boolean;
  className?: string;
}

const BadgeRoot = React.forwardRef<HTMLDivElement, BadgeRootProps>(
  function BadgeRoot(
    {
      variant = "neutral",
      children,
      removable = false,
      className,
      ...otherProps
    }: BadgeRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/97bdb082 items-center gap-1 rounded-full bg-neutral-container-emphasis px-2 py-1 inline-flex",
          {
            "pl-2 pr-1.5 py-1": removable,
            "bg-reservation-container": variant === "reservation",
            "bg-notice-container": variant === "notice",
            "bg-error-container": variant === "error",
            "bg-success-container": variant === "success",
            "bg-beta-container": variant === "beta",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children ? (
          <span className="whitespace-nowrap text-caption font-caption text-primary-text">
            {children}
          </span>
        ) : null}
        <FeatherX
          className={SubframeUtils.twClassNames(
            "hidden font-['DM_Sans'] text-[13px] font-[400] leading-[13px] text-primary-text",
            { "inline-flex": removable }
          )}
        />
      </div>
    );
  }
);

export const Badge = BadgeRoot;
