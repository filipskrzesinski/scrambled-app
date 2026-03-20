"use client";
/*
 * Documentation:
 * Text Field — https://app.subframe.com/0d6c855193c0/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import { FeatherSearch } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "placeholder" | "size"
  > {
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  placeholder?: React.ReactNode;
  size?: "medium" | "large";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type = "text",
    placeholder,
    size = "medium",
    className,
    ...otherProps
  }: InputProps,
  ref
) {
  return (
    <input
      className={SubframeUtils.twClassNames(
        "group/b0d608f7 h-8 w-full border-none bg-transparent px-3 py-2 text-body font-body text-primary-text outline-none placeholder:text-secondary-text",
        { "h-11 w-full px-4 py-3": size === "large" },
        className
      )}
      placeholder={placeholder as string}
      ref={ref}
      type={
        type === "search"
          ? "search"
          : type === "url"
          ? "url"
          : type === "tel"
          ? "tel"
          : type === "number"
          ? "number"
          : type === "email"
          ? "email"
          : type === "password"
          ? "password"
          : "text"
      }
      {...otherProps}
    />
  );
});

interface PrefixProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "medium" | "large";
  children?: React.ReactNode;
  className?: string;
}

const Prefix = React.forwardRef<HTMLDivElement, PrefixProps>(function Prefix(
  { size = "medium", children, className, ...otherProps }: PrefixProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "group/a4fd5f60 flex h-8 items-center justify-center rounded-l-full bg-neutral-container px-3 py-2",
        { "h-11 w-auto px-4 py-3": size === "large" },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

interface SuffixProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "medium" | "large";
  children?: React.ReactNode;
  className?: string;
}

const Suffix = React.forwardRef<HTMLDivElement, SuffixProps>(function Suffix(
  { size = "medium", children, className, ...otherProps }: SuffixProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "group/9eec2e88 flex h-8 items-center justify-center rounded-r-full bg-neutral-container px-3 py-2",
        { "h-11 w-auto px-4 py-3": size === "large" },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

interface IconSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "medium" | "large";
  icon?: React.ReactNode;
  className?: string;
}

const IconSlot = React.forwardRef<HTMLDivElement, IconSlotProps>(
  function IconSlot(
    {
      size = "medium",
      icon = <FeatherSearch />,
      className,
      ...otherProps
    }: IconSlotProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/0236e7fe flex h-8 items-center justify-center px-3 py-2 pe-0",
          { "h-11 w-auto px-4 py-3": size === "large" },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper className="text-body font-body text-secondary-text">
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
      </div>
    );
  }
);

interface TextFieldRootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  error?: boolean;
  size?: "medium" | "large";
  children?: React.ReactNode;
  className?: string;
}

const TextFieldRoot = React.forwardRef<HTMLLabelElement, TextFieldRootProps>(
  function TextFieldRoot(
    {
      disabled = false,
      error = false,
      size = "medium",
      children,
      className,
      ...otherProps
    }: TextFieldRootProps,
    ref
  ) {
    return (
      <label
        className={SubframeUtils.twClassNames(
          "group/be48ca43 h-8 items-center rounded-full bg-white inline-flex outline outline-1 -outline-offset-1 outline-neutral-border focus-within:inline-flex focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-neutral-border-emphasis",
          {
            "h-11 w-auto": size === "large",
            "inline-flex outline outline-1 -outline-offset-1 outline-error-border hover:inline-flex hover:outline hover:outline-1 hover:-outline-offset-1 hover:outline-error-border-emphasis focus-within:inline-flex focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-error-border-emphasis":
              error,
            "bg-neutral-container inline-flex outline outline-1 -outline-offset-1 outline-neutral-border cursor-not-allowed":
              disabled,
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children ? (
          <div className="flex grow shrink-0 basis-0 items-center">
            {children}
          </div>
        ) : null}
      </label>
    );
  }
);

export const TextField = Object.assign(TextFieldRoot, {
  Input,
  Prefix,
  Suffix,
  IconSlot,
});
