
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SocialLoginButton from "./SocialLoginButton";
import { Github, Google } from "lucide-react";

const LoginCard = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add your Google authentication logic here
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
    // Add your GitHub authentication logic here
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Login to your account using social providers
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SocialLoginButton 
          icon={<Google size={20} />}
          provider="Google"
          onClick={handleGoogleLogin}
          className="bg-white hover:bg-gray-50 text-black border border-gray-300"
        />
        <SocialLoginButton 
          icon={<Github size={20} />}
          provider="GitHub"
          onClick={handleGithubLogin}
          className="bg-gray-900 hover:bg-gray-800 text-white"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-sm text-muted-foreground">
        <p>Secure authentication powered by social providers</p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
