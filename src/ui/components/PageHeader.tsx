"use client";

import React from "react";
import * as SubframeUtils from "../utils";

interface TitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

const Title = React.forwardRef<HTMLSpanElement, TitleProps>(function Title(
  { children, className, ...otherProps }: TitleProps,
  ref
) {
  return children ? (
    <span
      className={SubframeUtils.twClassNames(
        "whitespace-nowrap text-heading-1 font-heading-1 text-primary-text",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </span>
  ) : null;
});

interface LeftSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const LeftSlot = React.forwardRef<HTMLDivElement, LeftSlotProps>(
  function LeftSlot(
    { children, className, ...otherProps }: LeftSlotProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeUtils.twClassNames(
          "flex items-center gap-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  }
);

interface RightSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const RightSlot = React.forwardRef<HTMLDivElement, RightSlotProps>(
  function RightSlot(
    { children, className, ...otherProps }: RightSlotProps,
    ref
  ) {
    return children ? (
      <div
        className={SubframeUtils.twClassNames(
          "flex items-center gap-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    ) : null;
  }
);

interface PageHeaderRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  leftSlot?: React.ReactNode;
  title?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

const PageHeaderRoot = React.forwardRef<HTMLDivElement, PageHeaderRootProps>(
  function PageHeaderRoot(
    {
      leftSlot,
      title,
      rightSlot,
      className,
      ...otherProps
    }: PageHeaderRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start gap-2 px-6 pt-6",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-4 rounded-2xl bg-secondary-background px-6 py-4">
          {leftSlot ? (
            <div className="flex items-center gap-2">{leftSlot}</div>
          ) : null}
          <div className="flex min-w-[0px] grow shrink-0 basis-0 items-center gap-4">
            {title ? (
              <span className="whitespace-nowrap text-heading-1 font-heading-1 text-primary-text">
                {title}
              </span>
            ) : null}
          </div>
          {rightSlot ? (
            <div className="flex items-center gap-2">{rightSlot}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const PageHeader = Object.assign(PageHeaderRoot, {
  Title,
  LeftSlot,
  RightSlot,
});
