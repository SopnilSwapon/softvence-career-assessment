"use client";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ListProps {
  children: ReactNode;
  className?: string;
  gap?: string;
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: boolean;
}

const List = ({
  children,
  className,
  gap = "gap-4",
  direction = "row",
  justify = "start",
  align = "start",
  wrap = false,
}: ListProps) => {
  const directionClass = direction === "row" ? "flex-row" : "flex-col";

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }[justify];

  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }[align];

  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";

  return (
    <div
      className={twMerge(
        "flex",
        directionClass,
        justifyClass,
        alignClass,
        wrapClass,
        gap,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default List;
