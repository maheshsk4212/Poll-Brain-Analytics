import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider transition-colors disabled:pointer-events-none disabled:opacity-50",
                    variant === "primary" && "bg-saffron text-white hover:bg-saffron-highlight",
                    variant === "secondary" && "bg-transparent border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)]",
                    variant === "outline" && "border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5",
                    variant === "ghost" && "hover:bg-[var(--text-primary)]/5 text-[var(--text-primary)]",
                    size === "default" && "h-12 px-6 py-2",
                    size === "sm" && "h-9 rounded-md px-4",
                    size === "lg" && "h-14 rounded-md px-8",
                    size === "icon" && "h-12 w-12",
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
