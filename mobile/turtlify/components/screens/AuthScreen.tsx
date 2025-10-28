import { useState } from "react";
import { Button } from "../shared/button";
import { Input } from "../shared/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../shared/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../shared/tabs";
import { AppleIcon } from "./AppleIcon";
import { GoogleIcon } from "./GoogleIcon";
import { User } from "../../App";

interface AuthScreenProps {
  onLogin: (user: User) => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    // Mock login
    onLogin({
      id: "1",
      name: name || "Turtle Explorer",
      email: email || "user@example.com",
    });
  };

  const handleSocialLogin = (provider: string) => {
    // Mock social login
    onLogin({
      id: "1",
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`,
    });
  };

  const handleGuestMode = () => {
    onLogin({
      id: "guest",
      name: "Guest User",
      email: "guest@turtlify.com",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="w-full max-w-sm space-y-6">
        {/* App Logo & Title */}
        <div className="text-center space-y-2">
          <div className="w-20 h-20 mx-auto bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-6xl">🐢</span>
          </div>
          <h1 className="text-3xl font-medium text-green-800">
            Turtlify
          </h1>
          <p className="text-base text-green-600">
            Snap. Discover. Learn.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Get Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 h-12 p-1">
                <TabsTrigger
                  value="login"
                  className="h-full text-base"
                >
                  Log In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="h-full text-base"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-base"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="text-base"
                  />
                  <Button
                    onClick={handleLogin}
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-base"
                  >
                    Log In
                  </Button>
                </div>
              </TabsContent>

              <TabsContent
                value="register"
                className="space-y-4"
              >
                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-base"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-base"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="text-base"
                  />
                  <Button
                    onClick={handleLogin}
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-base"
                  >
                    Sign Up
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-base">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialLogin("Google")}
                  className="w-12 h-12"
                >
                  <GoogleIcon className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialLogin("Apple")}
                  className="w-12 h-12"
                >
                  <AppleIcon className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialLogin("Facebook")}
                  className="w-12 h-12"
                >
                  <span className="text-2xl">f</span>
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="ghost"
                onClick={handleGuestMode}
                className="w-full h-12 text-gray-600 text-base"
              >
                Continue as Guest
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
