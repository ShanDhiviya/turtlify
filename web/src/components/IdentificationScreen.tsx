import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ChevronLeft } from 'lucide-react';
import { AnimalDiscovery } from '../App';

interface IdentificationScreenProps {
  image: string;
  onAnimalIdentified: (animal: AnimalDiscovery) => void;
  onBack: () => void;
}

export function IdentificationScreen({ image, onAnimalIdentified, onBack }: IdentificationScreenProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Uploading image...');

  useEffect(() => {
    const identifyAnimal = async () => {
      // Simulate AI processing
      const steps = [
        { progress: 20, status: 'Uploading image...' },
        { progress: 40, status: 'Analyzing features...' },
        { progress: 60, status: 'Identifying species...' },
        { progress: 80, status: 'Gathering information...' },
        { progress: 100, status: 'Complete!' }
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setProgress(steps[i].progress);
        setStatus(steps[i].status);
      }

      // Mock identification result
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockAnimal: AnimalDiscovery = {
        id: Date.now().toString(),
        commonName: 'Green Sea Turtle',
        scientificName: 'Chelonia mydas',
        image: image,
        timestamp: new Date().toISOString(),
        location: 'Tropical oceans',
        classification: {
          kingdom: 'Animalia',
          phylum: 'Chordata',
          class: 'Reptilia',
          order: 'Testudines',
          family: 'Cheloniidae',
          genus: 'Chelonia',
          species: 'C. mydas'
        },
        habitat: 'Tropical and subtropical oceans worldwide',
        conservationStatus: 'Endangered',
        funFacts: [
          'Can hold their breath for 5 hours underwater!',
          'Navigate using Earth\'s magnetic field',
          'Can live over 80 years',
          'Adults are herbivores, eating mainly seagrass'
        ]
      };

      onAnimalIdentified(mockAnimal);
    };

    identifyAnimal();
  }, [image, onAnimalIdentified]);

  return (
    <div style={{
      marginTop:'58px'
    }} className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <div className="fixed z-40 left-0 right-0 bg-white shadow-sm px-4 py-3 flex items-center">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
          <ChevronLeft className="w-12 h-12" />
        </Button>
        <h1 className="text-xl font-medium">Identifying...</h1>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Image Preview */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="w-32 h-32 bg-blue-200 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🐢</span>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-800 mb-2">
              {status}
            </h2>
            <p className="text-base text-gray-600">
              Turtlify AI is analyzing your image to identify the species
            </p>
          </div>

          <div className="space-y-2">
            <Progress value={progress} className="h-3" />
            <div className="text-center text-base text-gray-500">
              {progress}% complete
            </div>
          </div>

          {/* Processing Steps */}
          <div className="space-y-3">
            <div className={`flex items-center space-x-3 ${progress >= 20 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${progress >= 20 ? 'bg-green-600' : 'bg-gray-300'}`} />
              <span className="text-base">Image uploaded</span>
            </div>
            <div className={`flex items-center space-x-3 ${progress >= 40 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${progress >= 40 ? 'bg-green-600' : 'bg-gray-300'}`} />
              <span className="text-base">Features analyzed</span>
            </div>
            <div className={`flex items-center space-x-3 ${progress >= 60 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${progress >= 60 ? 'bg-green-600' : 'bg-gray-300'}`} />
              <span className="text-base">Species identified</span>
            </div>
            <div className={`flex items-center space-x-3 ${progress >= 100 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-3 h-3 rounded-full ${progress >= 100 ? 'bg-green-600' : 'bg-gray-300'}`} />
              <span className="text-base">Information gathered</span>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-medium text-base text-blue-800 mb-1">While you wait...</h3>
            <p className="text-base text-blue-700">
              Did you know that sea turtles have been around for over 100 million years, making them one of Earth's most ancient creatures?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
