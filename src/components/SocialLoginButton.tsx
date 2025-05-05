
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  provider: string;
  className?: string;
}

const SocialLoginButton = ({ 
  icon, 
  provider, 
  className, 
  ...props 
}: SocialLoginButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className={cn(
        "w-full flex items-center justify-center gap-2 h-11 px-5 py-2 rounded-md font-medium transition-all", 
        className
      )} 
      {...props}
    >
      {icon}
      <span>Continue with {provider}</span>
    </Button>
  );
};

export default SocialLoginButton;
