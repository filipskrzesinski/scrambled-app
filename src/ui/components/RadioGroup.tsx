"use client";
/*
 * Documentation:
 * Radio Group — https://app.subframe.com/0d6c855193c0/library?component=Radio+Group_c4b6300e-20b4-4f3e-8b9f-379a046674ca
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface OptionProps
  extends React.ComponentProps<typeof SubframeCore.RadioGroup.Item> {
  label?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
}

const Option = React.forwardRef<HTMLButtonElement, OptionProps>(function Option(
  {
    label,
    disabled = false,
    checked = false,
    className,
    ...otherProps
  }: OptionProps,
  ref
) {
  return (
    <SubframeCore.RadioGroup.Item
      checked={checked}
      disabled={disabled}
      asChild={true}
      {...otherProps}
    >
      <button
        className={SubframeUtils.twClassNames(
          "group/0f804ad9 flex cursor-pointer items-center gap-2 border-none bg-transparent text-left disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
      >
        <div className="flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full border border-solid border-neutral-border-emphasis relative outline outline-1 outline-transparent hover:bg-accent-container hover:border-accent-fill hover:outline-accent-container focus-within:bg-accent-container focus-within:border-accent-fill focus-within:outline-accent-container group-aria-[checked=true]/0f804ad9:relative group-aria-[checked=true]/0f804ad9:outline group-aria-[checked=true]/0f804ad9:outline-1 group-aria-[checked=true]/0f804ad9:outline-transparent group-aria-[checked=true]/0f804ad9:hover:bg-accent-container group-aria-[checked=true]/0f804ad9:hover:border-accent-fill group-aria-[checked=true]/0f804ad9:hover:outline-accent-container group-aria-[checked=true]/0f804ad9:focus-within:bg-accent-container group-aria-[checked=true]/0f804ad9:focus-within:border-accent-fill group-aria-[checked=true]/0f804ad9:focus-within:outline-accent-container group-aria-[checked=true]/0f804ad9:active:bg-accent-fill-emphasis group-disabled/0f804ad9:border group-disabled/0f804ad9:border-solid group-disabled/0f804ad9:border-neutral-container-emphasis group-disabled/0f804ad9:relative group-disabled/0f804ad9:outline group-disabled/0f804ad9:outline-1 group-disabled/0f804ad9:outline-transparent group-disabled/0f804ad9:hover:bg-transparent group-disabled/0f804ad9:hover:border-neutral-container-emphasis group-disabled/0f804ad9:hover:outline-transparent group-disabled/0f804ad9:focus-within:bg-transparent group-disabled/0f804ad9:focus-within:border-neutral-container-emphasis group-disabled/0f804ad9:focus-within:outline-transparent">
          <div className="hidden h-2 w-2 flex-none items-start rounded-full bg-neutral-fill absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/0f804ad9:bg-accent-fill group-focus-within/0f804ad9:bg-accent-fill group-aria-[checked=true]/0f804ad9:flex group-disabled/0f804ad9:bg-neutral-container-emphasis group-hover/0f804ad9:group-disabled/0f804ad9:bg-neutral-container-emphasis" />
        </div>
        {label ? (
          <span className="text-body font-body text-primary-text">{label}</span>
        ) : null}
      </button>
    </SubframeCore.RadioGroup.Item>
  );
});

interface RadioGroupRootProps
  extends React.ComponentProps<typeof SubframeCore.RadioGroup.Root> {
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  error?: boolean;
  horizontal?: boolean;
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const RadioGroupRoot = React.forwardRef<HTMLDivElement, RadioGroupRootProps>(
  function RadioGroupRoot(
    {
      label,
      helpText,
      error = false,
      horizontal = false,
      children,
      className,
      ...otherProps
    }: RadioGroupRootProps,
    ref
  ) {
    return (
      <SubframeCore.RadioGroup.Root asChild={true} {...otherProps}>
        <div
          className={SubframeUtils.twClassNames(
            "group/c4b6300e flex flex-col items-start gap-2",
            className
          )}
          ref={ref}
        >
          {label ? (
            <span className="text-support-bold font-support-bold text-primary-text">
              {label}
            </span>
          ) : null}
          {children ? (
            <div
              className={SubframeUtils.twClassNames(
                "flex flex-col items-start gap-2",
                { "flex-row flex-nowrap gap-6": horizontal }
              )}
            >
              {children}
            </div>
          ) : null}
          {helpText ? (
            <span
              className={SubframeUtils.twClassNames(
                "text-caption font-caption text-secondary-text",
                { "text-error-700": error }
              )}
            >
              {helpText}
            </span>
          ) : null}
        </div>
      </SubframeCore.RadioGroup.Root>
    );
  }
);

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Option,
});
