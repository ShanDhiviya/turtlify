import { useState } from 'react';
import { AuthScreen } from './components/AuthScreen';
import { HomeScreen } from './components/HomeScreen';
import { IdentificationScreen } from './components/IdentificationScreen';
import { AnimalInfoScreen } from './components/AnimalInfoScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ManualIdentificationScreen } from './components/ManualIdentificationScreen';
import { PDFViewerScreen } from './components/PDFViewerScreen';

export type Screen = 'auth' | 'home' | 'identify' | 'animalInfo' | 'profile' | 'manual' | 'pdf';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AnimalDiscovery {
  id: string;
  commonName: string;
  scientificName: string;
  image: string;
  timestamp: string;
  location?: string;
  classification: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    species: string;
  };
  habitat: string;
  conservationStatus: string;
  funFacts: string[];
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('auth');
  const [user, setUser] = useState<User | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentAnimal, setCurrentAnimal] = useState<AnimalDiscovery | null>(null);
  const [currentPDFTitle, setCurrentPDFTitle] = useState<string>('');

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('auth');
  };

  const handleImageCapture = (imageData: string) => {
    setCurrentImage(imageData);
    setCurrentScreen('identify');
  };

  const handleAnimalIdentified = (animal: AnimalDiscovery) => {
    setCurrentAnimal(animal);
    setCurrentScreen('animalInfo');
  };

  const handlePDFOpen = (title: string) => {
    setCurrentPDFTitle(title);
    setCurrentScreen('pdf');
  };

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'auth':
        return <AuthScreen onLogin={handleLogin} />;
      case 'home':
        return (
          <HomeScreen 
            user={user!}
            onImageCapture={handleImageCapture}
            onNavigate={navigateToScreen}
          />
        );
      case 'identify':
        return (
          <IdentificationScreen 
            image={currentImage!}
            onAnimalIdentified={handleAnimalIdentified}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'animalInfo':
        return (
          <AnimalInfoScreen 
            animal={currentAnimal!}
            onBack={() => setCurrentScreen('home')}
            onNavigate={navigateToScreen}
          />
        );
      case 'profile':
        return (
          <ProfileScreen 
            user={user!}
            onLogout={handleLogout}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'manual':
        return (
          <ManualIdentificationScreen 
            onPDFOpen={handlePDFOpen}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'pdf':
        return (
          <PDFViewerScreen 
            title={currentPDFTitle}
            onBack={() => setCurrentScreen('manual')}
          />
        );
      default:
        return <HomeScreen user={user!} onImageCapture={handleImageCapture} onNavigate={navigateToScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg">
        {renderCurrentScreen()}
      </div>
    </div>
  );
}