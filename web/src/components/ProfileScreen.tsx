import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ChevronLeft, Settings, Award, Camera, BookOpen } from 'lucide-react';
import { User } from '../App';

interface ProfileScreenProps {
  user: User;
  onLogout: () => void;
  onBack: () => void;
}

export function ProfileScreen({ user, onLogout, onBack }: ProfileScreenProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (

      <>
        <div className="fixed left-0 right-0 top-0 bg-white px-2 py-2 flex items-center justify-between" style={{
          zIndex: 999,
        }}>
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="w-24 h-24" style={{
              width:24,
              height:24,
            }} />
          </Button>
          <h1 className="text-xl font-bold">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings className="w-24 h-24" style={{
              width:24,
              height:24,
            }} />
          </Button>

        </div>
        <div className="pt-58 min-h-screen bg-gradient-to-b from-blue-50 to-green-50" style={{
          paddingTop: '58px',
        }}>
          {/* Header */}
          <div className="p-4 space-y-4">
            {/* User Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-green-100 text-green-800 text-xl">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium">{user.name}</h2>
                    <p className="text-base text-gray-600">{user.email}</p>
                    <p className="text-base text-green-600 mt-1 font-bold">Turtle Explorer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  📊 Your Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">0</div>
                    <div className="text-base text-gray-600">Animals Discovered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">0</div>
                    <div className="text-base text-gray-600">Species Identified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">0</div>
                    <div className="text-base text-gray-600">Rare Finds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">0</div>
                    <div className="text-base text-gray-600">Days Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Award className="w-6 h-6" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Camera className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-base">First Discovery</p>
                        <p className="text-base text-gray-600">Identify your first animal</p>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xl">🔒</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-base">Explorer</p>
                        <p className="text-base text-gray-600">Discover 10 different species</p>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xl">🔒</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-base">
                  <Settings className="w-5 h-5 mr-3" />
                  App Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-base">
                  📱 Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start text-base">
                  🔒 Privacy
                </Button>
                <Button variant="ghost" className="w-full justify-start text-base">
                  ❓ Help & Support
                </Button>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <div className="space-y-3">
              <Button
                  variant="outline"
                  className="w-full text-base"
                  onClick={onLogout}
              >
                Log Out
              </Button>
            </div>

            {/* App Info */}
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-base text-gray-500">
                  Turtlify v1.0.0
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Made with ❤️ for wildlife conservation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </>

  );
}
