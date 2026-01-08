import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: "default" | "warning" | "danger" | "success";
}

export function DashboardCard({ title, children, className, icon, variant = "default" }: DashboardCardProps) {
  const variantStyles = {
    default: "border-primary/30 bg-card/50 shadow-[0_0_15px_rgba(0,240,255,0.1)]",
    warning: "border-yellow-500/50 bg-yellow-950/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]",
    danger: "border-destructive/50 bg-destructive/10 shadow-[0_0_15px_rgba(255,42,42,0.1)]",
    success: "border-green-500/50 bg-green-950/10 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-sm border backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] group",
      variantStyles[variant],
      className
    )}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
      
      <div className="p-4 md:p-6 relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b border-border/30 pb-2">
          <h3 className="text-lg font-bold tracking-wider uppercase text-primary flex items-center gap-2">
            {icon && <span className="text-accent">{icon}</span>}
            {title}
          </h3>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-primary/50 rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-primary/30 rounded-full" />
            <div className="w-1 h-1 bg-primary/10 rounded-full" />
          </div>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
