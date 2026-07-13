"use client";

import React from "react";
import { FeatherInfo } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface AlertRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: "neutral" | "beta" | "success" | "error" | "notice" | "reservation";
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const AlertRoot = React.forwardRef<HTMLDivElement, AlertRootProps>(
  function AlertRoot(
    {
      variant = "neutral",
      icon = <FeatherInfo />,
      title,
      children,
      action,
      className,
      ...otherProps
    }: AlertRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/3a65613d flex w-full items-center justify-between rounded-md border border-solid border-neutral-border bg-neutral-container px-4 py-3",
          {
            "border border-solid border-reservation-border bg-reservation-container":
              variant === "reservation",
            "border border-solid border-notice-border bg-notice-container":
              variant === "notice",
            "border border-solid border-error-border bg-error-container":
              variant === "error",
            "border border-solid border-success-border bg-success-container":
              variant === "success",
            "border border-solid border-beta-border bg-beta-container":
              variant === "beta",
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          <div className="flex items-center self-stretch">
            {icon ? (
              <SubframeCore.IconWrapper className="text-body font-body text-primary-text">
                {icon}
              </SubframeCore.IconWrapper>
            ) : null}
          </div>
          {title ? (
            <span className="grow shrink-0 basis-0 text-body font-body text-primary-text">
              {title}
            </span>
          ) : null}
          {children ? <div className="flex items-start">{children}</div> : null}
        </div>
        {action ? (
          <div className="flex items-start shrink-0">{action}</div>
        ) : null}
      </div>
    );
  }
);

export const Alert = AlertRoot;
