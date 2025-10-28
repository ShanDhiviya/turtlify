import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Camera, Image, User, Menu, Brain, BookOpen } from 'lucide-react';
import { User as UserType, Screen } from '../App';
import { useState } from 'react';
import {Avatar, AvatarFallback} from "./ui/avatar";

interface HomeScreenProps {
  user: UserType;
  onImageCapture: (imageData: string) => void;
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ user, onImageCapture, onNavigate }: HomeScreenProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCameraCapture = () => {
    // Mock camera capture - using a sample animal image
    const mockImageData = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
    onImageCapture(mockImageData);
  };

  const handleGallerySelect = (event:any) => {
    console.log(event)
    // Mock gallery selection - using a sample animal image
    const mockImageData = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
    onImageCapture(mockImageData);
  };

  const handleMenuItemClick = (screen: Screen) => {
    setIsMenuOpen(false);
    onNavigate(screen);
  };

  const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50
    to-blue-50" style={{
      marginTop:'58px'
    }}>
      {/* Header */}
      <div className="fixed left-0 right-0 z-40 top-0 bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu className="h-24 w-24" style={{
                  width:24,
                  height:24,
                  margin:0
                }}  />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader className="text-left ">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-green-100 text-green-800 text-xl">
                    {getInitials('Shan Dhiviyarajan')}
                  </AvatarFallback>
                </Avatar>
                <SheetTitle className="flex items-center gap-2 text-xl">
                  Shan Dhiviyarajan
                </SheetTitle>
                <p className="text-base text-muted-foreground">
                 prashasoft@gmail.com
                </p>
              </SheetHeader>

              <div className="mt-0 space-y-4 px-4">
                <div>

                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12 text-base"
                      onClick={() => handleMenuItemClick('home')}
                    >
                      <Brain className="w-10 h-10 text-green-600" style={{
                        width:24,
                        height:24,
                        margin:0
                      }} />
                      <div className="text-left">
                        <div className="font-medium text-lg">AI Identification</div>
                        <div className="text-sm font-normal text-muted-foreground">Photo-based AI analysis</div>
                      </div>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12 text-base"
                      onClick={() => handleMenuItemClick('manual')}
                    >
                      <BookOpen className="w-10 h-10 text-blue-600" style={{
                        width:24,
                        height:24,
                        margin:0
                      }} />
                      <div className="text-left">
                        <div className="font-medium font-bold">Manual Identification</div>
                        <div className="text-sm font-normal text-muted-foreground">Category-based guides</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4">

                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12 text-base"
                      onClick={() => handleMenuItemClick('profile')}
                    >
                      <User className="w-6 h-6 text-gray-600" style={{
                        width:24,
                        height:24,
                        margin:0
                      }}/>
                      <div className="text-left">
                        <div className="font-medium">Profile</div>
                        <div className="text-sm text-muted-foreground">Account settings</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-center text-base text-muted-foreground">
                    <p>Welcome back, {user.name}</p>
                    <p className="text-sm mt-1">🐢 Turtle Explorer</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div>
            <h1 className="text-2xl font-medium text-green-800 font-bold">Turtlify</h1>
            <p className="text-sm text-gray-500">AI Identification</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('profile')}
        >
          <User className="w-12 h-12" style={{
            width:24,
            height:24,
            margin:0
          }} />
        </Button>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-2">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">🐢</span>
          </div>
          <h2 className="text-2xl font-medium text-gray-800">AI-Powered Discovery</h2>
          <p className="text-base text-gray-600">Take a photo or choose from gallery to identify turtles and other animals using AI</p>
        </div>

        {/* Action Cards */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <Button
                onClick={handleCameraCapture}
                className="w-full h-20 bg-green-600 hover:bg-green-700 flex flex-col items-center justify-center space-y-2 text-base"
              >
                <Camera style={{
                  width:24,
                  height:24,
                  margin:0
                }} className="w-12 h-12" />
                <span>Take Photo</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6 relative">
              <input
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleGallerySelect}
              type="file"
              className="hidden"
              id="gallery-upload"
              style={{
              position:'absolute',
              width:'100%',
              height:'100%',
              opacity:0
              }} />

  <Button
                onClick={handleGallerySelect}
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 border-green-200 hover:bg-green-50 text-base"
              >
                <Image className="w-12 h-12" style={{
                  width:24,
                  height:24,
                  margin:0
                }}  />
                <span>Choose from Gallery</span>
              </Button>

            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium mb-1 text-base">Try Manual Identification</h3>
                <p className="text-base text-gray-600">Browse category guides</p>
              </div>
              <Button
                variant="secondary"
                onClick={() => onNavigate('manual')}
                className="bg-blue-200 border-blue-100 text-blue-700 hover:bg-blue-50 text-base"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Library
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Discovery Stats */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3 text-base">Discovery Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Animals Identified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">Species Discovered</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Educational Content */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2 text-base">Did You Know?</h3>
            <p className="text-base text-gray-600">
              Sea turtles have existed for over 100 million years and can navigate thousands of miles using Earth's magnetic field. They're truly ancient mariners of our oceans!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
