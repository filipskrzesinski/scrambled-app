"use client";
/*
 * Documentation:
 * Home Card — https://app.subframe.com/0d6c855193c0/library?component=Home+Card_a2ebdba2-cf18-42af-bdb1-b383ebaf1a90
 */

import React from "react";
import { FeatherUtensils } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface HomeCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  className?: string;
}

const HomeCardRoot = React.forwardRef<HTMLDivElement, HomeCardRootProps>(
  function HomeCardRoot(
    {
      icon = <FeatherUtensils />,
      label,
      className,
      ...otherProps
    }: HomeCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/a2ebdba2 flex w-full cursor-pointer flex-col items-start gap-6 rounded-2xl bg-primary-background px-6 py-6 hover:bg-secondary-background",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {icon ? (
          <SubframeCore.IconWrapper className="text-heading-1 font-heading-1 text-primary-text">
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        {label ? (
          <span className="text-heading-2 font-heading-2 text-primary-text">
            {label}
          </span>
        ) : null}
      </div>
    );
  }
);

export const HomeCard = HomeCardRoot;
