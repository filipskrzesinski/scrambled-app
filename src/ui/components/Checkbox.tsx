"use client";

import React from "react";
import { FeatherCheck } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface CheckboxRootProps
  extends React.ComponentProps<typeof SubframeCore.Checkbox.Root> {
  label?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

const CheckboxRoot = React.forwardRef<HTMLButtonElement, CheckboxRootProps>(
  function CheckboxRoot(
    {
      label,
      disabled = false,
      checked = false,
      className,
      ...otherProps
    }: CheckboxRootProps,
    ref
  ) {
    return (
      <SubframeCore.Checkbox.Root
        checked={checked}
        disabled={disabled}
        asChild={true}
        {...otherProps}
      >
        <button
          className={SubframeUtils.twClassNames(
            "group/3816e3b5 flex cursor-pointer items-center gap-2 text-left",
            className
          )}
          ref={ref}
        >
          <div className="flex h-4 w-4 flex-none items-center justify-center rounded-sm border border-solid border-neutral-border-emphasis bg-white transition-colors group-hover/3816e3b5:bg-accent-container group-hover/3816e3b5:transition-colors group-hover/3816e3b5:border-accent-fill group-active/3816e3b5:bg-accent-fill group-focus-within/3816e3b5:bg-accent-container group-focus-within/3816e3b5:transition-colors group-focus-within/3816e3b5:border-accent-fill group-aria-[checked=true]/3816e3b5:border group-aria-[checked=true]/3816e3b5:border-solid group-aria-[checked=true]/3816e3b5:border-neutral-fill group-aria-[checked=true]/3816e3b5:bg-neutral-fill group-hover/3816e3b5:group-aria-[checked=true]/3816e3b5:bg-accent-fill group-active/3816e3b5:group-aria-[checked=true]/3816e3b5:bg-accent-fill-emphasis group-focus-within/3816e3b5:group-aria-[checked=true]/3816e3b5:bg-accent-fill group-disabled/3816e3b5:border group-disabled/3816e3b5:border-solid group-disabled/3816e3b5:border-neutral-container-emphasis group-disabled/3816e3b5:bg-neutral-container-emphasis group-disabled/3816e3b5:transition-colors group-disabled/3816e3b5:cursor-not-allowed group-hover/3816e3b5:group-disabled/3816e3b5:bg-neutral-container-emphasis group-hover/3816e3b5:group-disabled/3816e3b5:transition-colors group-hover/3816e3b5:group-disabled/3816e3b5:border-neutral-container-emphasis">
            <FeatherCheck className="hidden text-body font-body text-white group-aria-[checked=true]/3816e3b5:inline-flex" />
          </div>
          {label ? (
            <span className="text-body font-body text-primary-text group-disabled/3816e3b5:text-secondary-text">
              {label}
            </span>
          ) : null}
        </button>
      </SubframeCore.Checkbox.Root>
    );
  }
);

export const Checkbox = CheckboxRoot;
