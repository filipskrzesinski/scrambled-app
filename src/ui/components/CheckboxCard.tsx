"use client";
/*
 * Documentation:
 * Checkbox Card — https://app.subframe.com/0d6c855193c0/library?component=Checkbox+Card_de0b4dfb-3946-4702-be52-5678dd71925a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface CheckboxCardRootProps
  extends React.ComponentProps<typeof SubframeCore.Checkbox.Root> {
  disabled?: boolean;
  checked?: boolean;
  hideCheckbox?: boolean;
  children?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

const CheckboxCardRoot = React.forwardRef<
  HTMLButtonElement,
  CheckboxCardRootProps
>(function CheckboxCardRoot(
  {
    disabled = false,
    checked = false,
    hideCheckbox = false,
    children,
    className,
    ...otherProps
  }: CheckboxCardRootProps,
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
          "group/de0b4dfb flex cursor-pointer items-center gap-4 rounded-md border border-solid border-neutral-border bg-primary-background px-4 py-3 text-left hover:bg-neutral-50 aria-[checked=true]:border aria-[checked=true]:border-solid aria-[checked=true]:border-brand-200 aria-[checked=true]:bg-brand-50 hover:aria-[checked=true]:bg-brand-50 disabled:cursor-default disabled:border disabled:border-solid disabled:border-neutral-100 disabled:bg-neutral-100 hover:disabled:cursor-default hover:disabled:bg-neutral-100",
          className
        )}
        ref={ref}
      >
        {children ? (
          <div className="flex grow shrink-0 basis-0 items-center gap-4">
            {children}
          </div>
        ) : null}
      </button>
    </SubframeCore.Checkbox.Root>
  );
});

export const CheckboxCard = CheckboxCardRoot;
