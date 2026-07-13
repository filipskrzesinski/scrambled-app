"use client";

import React from "react";
import { FeatherPlus } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface IconButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary-destructive"
    | "secondary-destructive"
    | "primary-live"
    | "secondary-live"
    | "primary-reservation"
    | "secondary-reservation"
    | "secondary-outline"
    | "link";
  size?: "large" | "medium" | "small";
  icon?: React.ReactNode;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const IconButtonRoot = React.forwardRef<HTMLButtonElement, IconButtonRootProps>(
  function IconButtonRoot(
    {
      disabled = false,
      variant = "secondary",
      size = "medium",
      icon = <FeatherPlus />,
      loading = false,
      className,
      type = "button",
      ...otherProps
    }: IconButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeUtils.twClassNames(
          "group/af9405b1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-neutral-container text-left transition-colors hover:bg-neutral-container-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-neutral-border-emphasis data-[state=open]:bg-neutral-container-emphasis data-[state=open]:outline data-[state=open]:outline-1 data-[state=open]:-outline-offset-1 data-[state=open]:outline-neutral-border-emphasis disabled:transition-colors disabled:cursor-not-allowed disabled:text-text-disabled disabled:outline-none",
          {
            "h-6 w-6": size === "small",
            "h-10 w-10": size === "large",
            "bg-transparent active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-neutral-border-emphasis active:outline-none":
              variant === "link" || variant === "tertiary",
            "bg-primary-background transition-colors outline outline-1 -outline-offset-1 outline-neutral-border":
              variant === "secondary-outline",
            "bg-reservation-container hover:bg-reservation-container-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-paywall-border-emphasis":
              variant === "secondary-reservation",
            "bg-reservation-fill hover:bg-reservation-fill-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-paywall-border-emphasis":
              variant === "primary-reservation",
            "bg-success-container hover:bg-success-container-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-success-border-emphasis":
              variant === "secondary-live",
            "bg-success-fill hover:bg-success-fill-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-success-border-emphasis":
              variant === "primary-live",
            "bg-error-container hover:bg-error-container-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-error-border-emphasis":
              variant === "secondary-destructive",
            "bg-error-fill hover:bg-error-fill-emphasis active:transition-colors active:outline active:outline-1 active:-outline-offset-1 active:outline-error-border-emphasis":
              variant === "primary-destructive",
            "bg-neutral-fill hover:bg-neutral-fill-emphasis":
              variant === "primary",
          },
          className
        )}
        ref={ref}
        type={type}
        disabled={disabled}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "text-body font-body text-primary-text group-disabled/af9405b1:text-text-disabled",
              {
                hidden: loading,
                "text-caption font-caption": size === "small",
                "text-heading-3 font-heading-3": size === "large",
                "text-text-on-paywall": variant === "primary-reservation",
                "text-text-on-success": variant === "primary-live",
                "text-text-on-error": variant === "primary-destructive",
                "text-text-on-neutral": variant === "primary",
              }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        <SubframeCore.Loader
          className={SubframeUtils.twClassNames(
            "hidden text-body font-body text-primary-text group-disabled/af9405b1:text-text-disabled",
            {
              "inline-block": loading,
              "text-caption font-caption": size === "small",
              "text-heading-3 font-heading-3": size === "large",
              "text-text-on-paywall": variant === "primary-reservation",
              "text-text-on-success": variant === "primary-live",
              "text-text-on-error": variant === "primary-destructive",
              "text-text-on-neutral": variant === "primary",
            }
          )}
        />
      </button>
    );
  }
);

export const IconButton = IconButtonRoot;
