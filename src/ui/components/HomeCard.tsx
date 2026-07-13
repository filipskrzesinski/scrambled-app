"use client";

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
          "group/a2ebdba2 flex w-full cursor-pointer flex-col items-start gap-3 rounded-xl bg-[#ffffff] p-5 hover:bg-secondary-background",
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
          <span className="text-data-body font-data-body text-primary-text">
            {label}
          </span>
        ) : null}
      </div>
    );
  }
);

export const HomeCard = HomeCardRoot;
