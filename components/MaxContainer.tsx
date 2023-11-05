import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxContainerProps {
  children: ReactNode;
  className?: string;
}

const MaxContainer = ({ children, className }: MaxContainerProps) => {
  return (
    <div className={cn("mx-auto w-full px-2 max-w-6xl", className)}>
      {children}
    </div>
  );
};

export default MaxContainer;
