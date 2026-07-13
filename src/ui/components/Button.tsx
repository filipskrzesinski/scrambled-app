"use client";

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface ButtonRootProps
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
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  function ButtonRoot(
    {
      disabled = false,
      variant = "secondary",
      size = "medium",
      children,
      icon = null,
      iconRight = null,
      loading = false,
      className,
      type = "button",
      ...otherProps
    }: ButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeUtils.twClassNames(
          "group/3b777358 cursor-pointer items-center justify-center gap-1 rounded-full border-none bg-neutral-container-emphasis px-3 py-2 text-left inline-flex select-none whitespace-nowrap text-body-bold font-body-bold text-primary-text outline outline-transparent transition-colors hover:bg-neutral-container active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-neutral-border-emphasis disabled:inline-flex disabled:select-none disabled:whitespace-nowrap disabled:text-body-bold disabled:font-body-bold disabled:outline-transparent disabled:transition-colors disabled:cursor-not-allowed disabled:text-text-disabled disabled:outline-none",
          {
            "px-2 py-1 text-primary-text inline-flex select-none whitespace-nowrap outline outline-transparent transition-colors text-support font-support":
              size === "small",
            "flex-row flex-nowrap gap-2 px-4 py-3": size === "large",
            "bg-transparent inline-flex select-none whitespace-nowrap text-body-bold font-body-bold text-primary-text outline-transparent transition-colors outline-none hover:inline-flex hover:select-none hover:whitespace-nowrap hover:text-body-bold hover:font-body-bold hover:outline hover:outline-transparent hover:transition-colors hover:text-text-link active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-neutral-border-emphasis active:outline-none active:text-text-link":
              variant === "link",
            "bg-primary-background inline-flex select-none whitespace-nowrap text-body-bold font-body-bold text-primary-text outline transition-colors outline-1 -outline-offset-1 outline-neutral-border":
              variant === "secondary-outline",
            "bg-reservation-container hover:bg-reservation-container-emphasis active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-paywall-border-emphasis":
              variant === "secondary-reservation",
            "bg-reservation-fill inline-flex select-none whitespace-nowrap text-body-bold font-body-bold outline outline-transparent transition-colors text-text-on-paywall hover:bg-reservation-fill-emphasis active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-paywall-border-emphasis":
              variant === "primary-reservation",
            "bg-success-container hover:bg-success-container-emphasis active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-success-border-emphasis":
              variant === "secondary-live",
            "bg-success-fill inline-flex select-none whitespace-nowrap text-body-bold font-body-bold outline outline-transparent transition-colors text-text-on-success hover:bg-success-fill-emphasis active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-success-border-emphasis":
              variant === "primary-live",
            "bg-error-container hover:bg-error-container-emphasis active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-error-border-emphasis":
              variant === "secondary-destructive",
            "bg-error-fill inline-flex select-none whitespace-nowrap text-body-bold font-body-bold outline outline-transparent transition-colors text-text-on-error hover:bg-error-fill-emphasis active:inline-flex active:select-none active:whitespace-nowrap active:text-body-bold active:font-body-bold active:text-primary-text active:outline active:transition-colors active:outline-1 active:-outline-offset-1 active:outline-error-border-emphasis":
              variant === "primary-destructive",
            "bg-transparent": variant === "tertiary",
            "bg-neutral-fill inline-flex select-none whitespace-nowrap text-body-bold font-body-bold outline outline-transparent transition-colors text-text-on-neutral hover:bg-neutral-fill-emphasis":
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
              "text-body font-body text-primary-text group-disabled/3b777358:text-text-disabled",
              {
                hidden: loading,
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
        <div
          className={SubframeUtils.twClassNames(
            "hidden h-4 w-4 flex-none items-center justify-center gap-2",
            { flex: loading, "h-3 w-3 flex-none": size === "small" }
          )}
        >
          <SubframeCore.Loader
            className={SubframeUtils.twClassNames(
              "text-body font-body text-primary-text group-disabled/3b777358:text-text-disabled",
              {
                "text-caption font-caption": size === "small",
                "text-text-on-paywall": variant === "primary-reservation",
                "text-text-on-success": variant === "primary-live",
                "text-text-on-error": variant === "primary-destructive",
                "text-text-on-neutral": variant === "primary",
              }
            )}
          />
        </div>
        {children ? (
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap text-body font-body text-primary-text group-disabled/3b777358:text-text-disabled",
              {
                hidden: loading,
                "text-support font-support": size === "small",
                "text-text-on-paywall": variant === "primary-reservation",
                "text-text-on-success": variant === "primary-live",
                "text-text-on-error": variant === "primary-destructive",
                "text-text-on-neutral": variant === "primary",
              }
            )}
          >
            {children}
          </span>
        ) : null}
        {iconRight ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "text-body font-body text-primary-text group-disabled/3b777358:text-text-disabled",
              {
                "text-heading-3 font-heading-3": size === "large",
                "text-text-on-paywall": variant === "primary-reservation",
                "text-text-on-success": variant === "primary-live",
                "text-text-on-error": variant === "primary-destructive",
                "text-text-on-neutral": variant === "primary",
              }
            )}
          >
            {iconRight}
          </SubframeCore.IconWrapper>
        ) : null}
      </button>
    );
  }
);

export const Button = ButtonRoot;
