
import LoginCard from "@/components/LoginCard";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600">Sign in to access your account</p>
        </div>
        <LoginCard />
      </div>
    </div>
  );
};

export default Index;
