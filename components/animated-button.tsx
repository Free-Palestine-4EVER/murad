"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedButtonProps extends ButtonProps {
  animationStyle?: "pulse" | "bounce" | "shine" | "expand" | "default"
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, animationStyle = "default", children, ...props }, ref) => {
    const animationClasses = {
      default: "transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-md active:shadow-sm",
      pulse:
        "transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-md active:shadow-sm hover:animate-pulse",
      bounce: "transition-all duration-300 hover:animate-bounce hover:shadow-md active:shadow-sm",
      shine:
        "transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-md active:shadow-sm relative overflow-hidden hover:before:absolute hover:before:inset-0 hover:before:bg-white/20 hover:before:animate-shine",
      expand: "transition-all duration-300 hover:scale-[1.05] active:scale-[0.97] hover:shadow-lg active:shadow-sm",
    }

    return (
      <Button ref={ref} className={cn(animationClasses[animationStyle], className)} {...props}>
        {children}
      </Button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
