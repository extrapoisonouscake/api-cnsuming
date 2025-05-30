import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-[1px] flex-1 border-t border-border border-dotted",
        className
      )}
    />
  );
}
